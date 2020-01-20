import scroller from "./scroll.js";
import position from './findPosition.js'
export default class createIframe {
  constructor(data) {
    this.content = document.querySelector(".content");
    this.footer = document.querySelector(".footer");
    this.data = data;
    this.c = 0;
    this.old = 0;
    this.b = 0;
    this.oldbtn = 0;
  }

  // take array of data then display each index of array as button once clicked display content
  renderbtn(givenData = this.data, container = this.content, isNested = false) {
    let btns = document.createElement("div");
    btns.className = "btns";
    container.appendChild(btns);
    let nestedbtns = document.createElement("div");
    nestedbtns.className = "nestedBtns";

    if (isNested) {
      let NestedBtn;

      for (const e of givenData) {
        NestedBtn = this.generatebtn(e);
        nestedbtns.appendChild(NestedBtn);
      }

      this.renderOnce("b", container, "oldbtn", nestedbtns);
    } else {
      for (const e of givenData) {
        let btn = this.generatebtn(e);
        btns.appendChild(btn);
      }
    }
  }

  // take label , value , container  ---> check nested , pass it to create button
  generatebtn(e) {
    let btn;
    if (e.hasNestedButtons) {
      btn = this.createbtn(
        e.title,
        "btn",
        e.label,
        e.value,
        this.container,
        true
      );
    } else {
      btn = this.createbtn(
        e.title,
        "btn",
        e.label,
        e.value,
        this.container,
        false
      );
    }

    return btn;
  }

  // take button content then display button  , adding click event to createiframe function
  createbtn(title, classe, label, value, container, nested) {
    let btn = document.createElement("button");
    btn.className = classe;
    btn.innerText = title;
    btn.onclick = () => {
      nested
        ? this.renderbtn(value, this.content, true)
        : this.putContent(label, value, container);
    };

    return btn;
  }

  putContent(label, data, scope) {
    this.createIframe(label, data.rec, data.pdf, data.video, scope , data.model);
  }

  // take src ,container then create an ifreame
  createIframe(label, recsrc, pdfsrc, video, container ,model) {
    let scope = document.createElement("div");
    scope.className = "rev";
    let hd3 = document.createElement("h3");
    hd3.innerText = label;
    scope.appendChild(hd3);

    if (recsrc) this.renderRecord(recsrc, scope);

    if (pdfsrc) this.renderpdf(pdfsrc, scope);

    if (video) this.rendervideo(video, scope);

    if (model) this.renderModel ( model , scope)

    this.render(scope, container);

    return scope;
  }

  renderModel(url , scope){
    const displayrec = url;
    let rec = document.createElement("iframe");
    rec.setAttribute("frameborder", "0");
    rec.src=url

    rec.src = displayrec;
    rec.className = "record";

    const cont = document.createElement('div')
    cont.className ="sketchfab-embed-wrapper"
    cont.appendChild(rec)

    scope.appendChild(cont);
  }

  renderRecord(recsrc, scope) {
    const srcID = recsrc.split("/")[5];
    const displayrec = `https://drive.google.com/file/d/${srcID}/preview`;
    let rec = document.createElement("iframe");
    rec.setAttribute("frameborder", "0");

    rec.src = displayrec;
    rec.className = "record";
    scope.appendChild(rec);
  }

  extraButtons(pdfPosition,downloadPdf) {
    let scroll = document.createElement("a");
    scroll.className = "scroll";
    scroll.innerHTML = "scroll to pdf";
    scroll.href='#doc'

    let download = document.createElement("a");
    download.className = "Download";
    download.href = downloadPdf;
    download.innerHTML = "Download pdf";

    return { scroll, download };
  }

  renderpdf(pdfsrc, scope) {
    const src = pdfsrc.split("/")[5];
    const displayPdf = `https://drive.google.com/file/d/${src}/preview`;
    const downloadPdf = `https://drive.google.com/uc?authuser=0&id=${src}&export=download`;

    let pdf = document.createElement("iframe");
    pdf.setAttribute("frameborder", "0");
    pdf.src = displayPdf;
    pdf.className = "pdf";
    pdf.id = "doc";

    const pdfPosition = position(pdf)
    const extraBtn = this.extraButtons( pdfPosition.top,downloadPdf);
    
    scope.appendChild(extraBtn.scroll);
    scope.appendChild(extraBtn.download);
    scope.appendChild(pdf);
    
    scroller(pdf, "j");
    
    return pdf;
  }

  rendervideo(video, scope) {
    const rec = video.rec;
    const videoID = rec.split("=")[1];
    //change this later XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX

    let videoSrc = "";
    const isNotPlayList = video.rec.includes("watch");

    if (!isNotPlayList)
      videoSrc = `https://www.youtube.com/embed/videoseries?list=${videoID}`;
    else videoSrc = `https://www.youtube.com/embed/${videoID}`;

    let videoContainer = document.createElement("div");
    videoContainer.className = "subject-video";

    if (video.h1) {
      let videoHeader = document.createElement("h1");
      videoHeader.innerText = video.h1;
      videoContainer.appendChild(videoHeader);
    }

    if (video.p) {
      let videoparagraph = document.createElement("p");
      videoparagraph.innerText = video.p;
      videoContainer.appendChild(videoparagraph);
    }

    let videoIframe = document.createElement("iframe");
    videoIframe.src = videoSrc;
    videoIframe.allow =
      "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture";
    videoIframe.setAttribute("allowfullscreen", true);
    videoIframe.setAttribute("frameborder", "0");
    videoContainer.appendChild(videoIframe);
    scope.appendChild(videoContainer);
  }

  // check if it's rendered before
  render(child) {
    this.renderOnce("c", this.content, "old", child);
    this.footer.style.display = "block";
  }

  // a shit of code  just to make sure there is just one child for parent
  renderOnce(counter, container, old, child) {
    if (this[counter] === 0) {
      container.appendChild(child);
      this[old] = child;
    } else {
      if (child !== this[old]) {
        container.replaceChild(child, this[old]);
        this[old] = child;
      }
    }
    this[counter]++;
  }
}

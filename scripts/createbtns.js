/**
 *
 */

export default class createIframe {
  constructor(data) {
    this.content = document.querySelector(".content");
    this.data = data;
    this.c = 0;
    this.old = 0;
  }
  renderbtn = (givenData, container = this.content) => {
    let btns = document.createElement("div");
    btns.className = "btns";
    container.appendChild(btns);

    for (const e of givenData) {
      let btn;
      if (e.nestedbtn) {
        btn = this.createbtn(e.title, "btn", e.label, e.value, container, true);
      } else {
        btn = this.createbtn(
          e.title,
          "btn",
          e.label,
          e.value,
          container,
          false
        );
      }
      btns.appendChild(btn);
    }
  };

  createbtn(title, classe, label, value, container, isnested) {
    let btn = document.createElement("button");
    console.log(value);
    btn.className = classe;
    btn.innerText = title;
    btn.onclick = () => {
      if (isnested) 
        this.renderbtn(value);
       else 
        this.createIframe(label, value.rec, value.pdf, value.video, container);
      
    };
    return btn;
  }

  createIframe(label, recsrc, pdfsrc, video, container) {
    let scope = document.createElement("div");
    scope.className = "rev";

    let hd3 = document.createElement("h3");
    hd3.innerText = label;
    scope.appendChild(hd3);

    if (recsrc) {
      this.renderRecord(recsrc, scope);
    }
    if (pdfsrc) {
      this.renderpdf(pdfsrc, scope);
    }

    if (video) {
      this.rendervideo(video, scope);
    }

    this.render(scope, container);

    return scope;
  }
  renderRecord(recsrc, scope) {
    let rec = document.createElement("iframe");
    rec.src = recsrc;
    rec.className = "record";
    scope.appendChild(rec);
  }

  renderpdf(pdfsrc, scope) {
    let scroll = document.createElement("a");
    scroll.className = "scroll";
    scroll.href = "#doc";
    scroll.innerHTML = "scroll to pdf";
    scope.appendChild(scroll);

    let pdf = document.createElement("iframe");
    pdf.src = pdfsrc;
    pdf.className = "pdf";
    pdf.id = "doc";
    scope.appendChild(pdf);
  }

  rendervideo(video, scope) {
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
    videoIframe.src = video.src;

    videoIframe.frameborder = "0";
    videoIframe.allow =
      "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture";
    videoIframe.allowfullscreen = true;

    videoContainer.appendChild(videoIframe);
    scope.appendChild(videoContainer);
  }

  render(child) {
    if (this.c === 0) {
      this.content.appendChild(child);
      this.old = child;
      // footer.style.display = "block";
    } else {
      if (child !== this.old) {
        this.content.replaceChild(child, this.old);
        this.old = child;
      }
    }
    this.c++;
  }
}

export default class createIframe {
  constructor(data) {
    this.content = document.querySelector(".content");
    this.footer =document.querySelector(".footer")
    this.data = data;
    this.c = 0;
    this.old = 0;
    this.b = 0;
    this.oldbtn = 0;
  }

  renderbtn = (givenData, container = this.content, isNested) => {
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
  };

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

  createbtn(title, classe, label, value, container, nested) {
    let btn = document.createElement("button");
    btn.className = classe;
    btn.innerText = title;
    btn.onclick = () => {
      nested
        ? this.renderbtn(value, this.content, true)
        : this.createIframe(
            label,
            value.rec,
            value.pdf,
            value.video,
            container
          );
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
    videoIframe.allow =
      "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture";
      videoIframe.setAttribute("allowfullscreen",true)  
      videoIframe.setAttribute("frameborder","0")  

    videoContainer.appendChild(videoIframe);
    scope.appendChild(videoContainer);
  }

  render(child) {
    this.renderOnce("c", this.content, "old", child);
    this.footer.style.display = "block";

  }

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
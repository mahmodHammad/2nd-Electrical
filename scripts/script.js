const content = document.querySelector(".content");
// const footer = document.querySelector(".footer");

// creates button then append it to container
const renderbtn = (givenData, container = content) => {
  let btns = document.createElement("div");
  btns.className = "btns";
  container.appendChild(btns);

  for (const e of givenData) {
    let btn = createbtn(e.title, "btn", e.label, e.value, container);
    btns.appendChild(btn);
  }
};
function createbtn(title, classe, label, value, container) {
  let btn = document.createElement("button");
  btn.className = classe;
  btn.innerText = title;
  btn.onclick = () =>
    createIframe(label, value.rec, value.pdf, value.video, container);
  return btn;
}

function createIframe(label, recsrc, pdfsrc, video, container) {
  let scope = document.createElement("div");
  scope.className = "rev";
  
  let hd3 = document.createElement("h3");
  hd3.innerText = label;
  scope.appendChild(hd3);

  if (recsrc) {
    let rec = document.createElement("iframe");
    rec.src = recsrc;
    rec.className = "record";
    scope.appendChild(rec);
  }
  if (pdfsrc) {
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

  if (video) {
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
    
    videoContainer.appendChild(videoIframe)
    scope.appendChild(videoContainer);
  }

  render(scope, container);

  return scope;
}

function render(child, container) {
  var c = 0;
  var old = 0;
  if (c === 0) {
    container.appendChild(child);
    old = child;
    // footer.style.display = "block";
  } else {
    if (child !== old) {
      container.replaceChild(child, old);
      old = child;
    }
  }
  c++;
}
export default renderbtn;

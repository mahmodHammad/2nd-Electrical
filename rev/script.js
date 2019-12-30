const content = document.querySelector(".content");
const footer = document.querySelector(".footer");

function renderbtn() {
  let btns = document.createElement("div");
  btns.className = "btns";
  content.appendChild(btns);

  for (const e of data) {
    let btn = createbtn(e.lable, "btn", e.label, e.value);
    btns.appendChild(btn);
  }
}
renderbtn();

function createbtn(lable, classe, label, value) {
  let btn = document.createElement("button");
  btn.className = classe;
  btn.innerText = lable;
  btn.onclick = () => create(label, value.rec, value.pdf);
  return btn;
}

function create(label, recsrc, pdfsrc) {
  let scroll = document.createElement("a");
  scroll.className = "scroll";
  scroll.href = "#doc";
  scroll.innerHTML = "scroll to pdf";

  let rev = document.createElement("div");
  rev.className = "rev";

  let hd3 = document.createElement("h3");
  hd3.innerText = label;

  let rec = document.createElement("iframe");
  rec.src = recsrc;
  rec.className = "record";

  let pdf = document.createElement("iframe");
  pdf.src = pdfsrc;
  pdf.attributes.mozallowfullscreen = "true";
  pdf.webkitallowfullscreen = "true";
  pdf.className = "pdf";
  pdf.id = "doc";

  rev.appendChild(scroll);
  rev.appendChild(hd3);
  rev.appendChild(rec);
  rev.appendChild(pdf);

  render(rev);

  return rev;
}

let c = 0;
let old = 0;
function render(child) {
  if (c === 0) {
    content.appendChild(child);
    old = child;
    footer.style.display = "block";
  } else {
    if (child !== old) {
      content.replaceChild(child, old);
      old = child;
    }
  }
  c++;
}
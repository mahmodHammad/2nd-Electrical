// const container = document.querySelector(".content");
import creater from "../index.js";
import data from './field'

const inst = new creater();
inst.renderbtn(data, container, false);

window.dataLayer = window.dataLayer || [];
function gtag() {
  dataLayer.push(arguments);
}

gtag('js', new Date());
gtag('config', 'UA-155223882-1');
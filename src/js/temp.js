import creater from "./toggleContent.js";
const container = document.querySelector('.content')
// console.log(container)
const inst = new creater(container);

export default function(jsonUrl) {
  // const jsonUrl="https://my-json-server.typicode.com/mahmodhammad/electronics/data"
  fetch(jsonUrl)
    .then(e => e.json())
    .then(data => {
      document.getElementById("loading").style.display = "none";
      // inst.renderbtn(data);
      // inst.putContent(1,2,4)
    })
}

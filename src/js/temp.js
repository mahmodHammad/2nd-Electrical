import creater from "./toggleContent.js";
const inst = new creater();
export default function(jsonUrl) {
  // const jsonUrl="https://my-json-server.typicode.com/mahmodhammad/electronics/data"
  fetch(jsonUrl)
    .then(e => e.json())
    .then(data => {
      document.getElementById("loading").style.display = "none";
        console.log(data)
      inst.renderbtn(data);
      inst.loadcontent(data);
    })
    .then(() => inst.renderToggle());
}

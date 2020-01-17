import creater from "./toggleContent.js";
const inst = new creater();
const container  = document.getElementById('toggle')

export default function(jsonUrl) {
  // const jsonUrl="https://my-json-server.typicode.com/mahmodhammad/electronics/data"
  fetch(jsonUrl)
    .then(e => e.json())
    .then(data => {
      document.getElementById("loading").style.display = "none";
        console.log(data)
      inst.renderbtn(data);
    //   inst.renderpdf('https://drive.google.com/file/d/1Sc7Od43zI_syMa7o7X47-1AiJgTPhXjF/view',container)
      inst.loadcontent(data);
    })
    .then(() => inst.renderToggle());
}

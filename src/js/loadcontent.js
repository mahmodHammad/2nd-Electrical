import creater from "./index.js";
const inst = new creater();
export default function(jsonUrl){
    // const jsonUrl="https://my-json-server.typicode.com/mahmodhammad/electronics/data"
    fetch(jsonUrl).then((e)=>e.json()) .then(data=>{
      document.getElementById("loading").style.display="none"
      inst.renderbtn(data)
      console.log(data)
    })
}
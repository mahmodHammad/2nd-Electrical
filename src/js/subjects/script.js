// const container = document.querySelector(".content");
import creater from "../index.js";
// import alldata from './field.js'
const inst = new creater();

const jsonUrl="https://gist.githubusercontent.com/mahmodHammad/d53d3aead5f6200beb9d9442fefe982c/raw/b11251d2ac593e763a88aecc476b4f1145fbc2da/data"
fetch(jsonUrl).then((e)=>e.json()) .then(data=>{
    // console.log(data)
    inst.renderbtn(data.data)
})

// const data = alldata()z
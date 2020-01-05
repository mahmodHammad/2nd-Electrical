// const container = document.querySelector(".content");
import creater from "../index.js";
// import alldata from './field.js'
const inst = new creater();

// const data = 
fetch("https://github.com/mahmodHammad/2nd-electrical-json/blob/master/db.json").then((e)=>e.json()) .then(data=>{
    inst.renderbtn(data)
    console.log(data)
})

// const data = alldata()
// const container = document.querySelector(".content");
import creater from "../index.js";
// import alldata from './field.js'
const inst = new creater();

// const data = 
fetch("https://gist.githubusercontent.com/mahmodHammad/d53d3aead5f6200beb9d9442fefe982c/raw/7fc444d9da26885335dbea4d1da708bad5cca796/data").then((e)=>e.json()) .then(data=>{
    console.log(data)
    inst.renderbtn(data.data)
})

// const data = alldata()z
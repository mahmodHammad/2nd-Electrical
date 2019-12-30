
export default class createIframe{
    constructor(data){
    //   this.content = document.querySelector(".content");
      this.data=data
      this.name="Hammad"
    }
    //  renderbtn = (givenData, container = content) => {
    //   let btns = document.createElement("div");
    //   btns.className = "btns";
    //   container.appendChild(btns);
    
    //   for (const e of givenData) {
    //     let btn = createbtn(e.title, "btn", e.label, e.value, container);
    //     btns.appendChild(btn);
    //   }
    // };
    //  createbtn(title, classe, label, value, container) {
    //   let btn = document.createElement("button");
    //   btn.className = classe;
    //   btn.innerText = title;
    //   btn.onclick = () =>
    //     createIframe(label, value.rec, value.pdf, value.video, container);
    //   return btn;
    // }

    sayHello(){
        console.log("hello mother fucker")
    }

    sayby(){
        console.log(this.data)
        console.log(this.name)
    }
    saythis(){
        console.log(this)
    }
   }
  
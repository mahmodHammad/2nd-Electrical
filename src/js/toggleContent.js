import renderer from "./index.js";

export default class Toggle extends renderer {
  constructor() {
    super();
  }


createContainer(){
    const togglebtn = document.createElement('button')
    togglebtn.className='toggle btn'
    togglebtn.innerText='solution'
    togglebtn.onclick=()=>this.displaySolution("hell")
    const container  = document.getElementById('toggle')
    container.appendChild(togglebtn)
}

displaySolution(test){
    console.log(test)
}
  loadcontent(data) {
    this.data = data;
  }


  renderToggle() {
      this.createContainer()
    console.log(this.data);
  }
}

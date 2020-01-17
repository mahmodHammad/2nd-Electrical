import renderer from "./index.js";

export default class Toggle extends renderer {
  constructor(scope) {
    super();
    this.content = scope;
    this.clicked = 0;

    // NEVER MIND ABOUT TOGGLE , TOGGLEOLD FOR NOW !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    this.toggle = 0;
    this.toggleOld = 0;
  }

  putContent(label, data) {
    console.log(label, data);

    if (data.togglePdf) {
      this.renderSwitch(data.pdf, data.togglePdf);
    } else {
      this.createIframe(label, data.rec, data.pdf, data.video);
    }
  }
  renderSwitch(url1, url2) {
    // the parent of content
    const contentHolder = document.createElement("div");
    contentHolder.className = "contentHolder rev";
    // ****************************************************

    // WILL Cnverted to a separate function later XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX

    // content 1
    const content1 = document.createElement("div");
    this.renderpdf(url1, content1);
    content1.className = "subContent content1";
    content1.id = "content1";
    contentHolder.appendChild(content1);
    // ****************************************************

    // content 2
    const content2 = document.createElement("div");
    this.renderpdf(url2, content2);
    content2.className = "subContent content2";
    content2.id = "content2";
    contentHolder.appendChild(content2);
    // ****************************************************

// XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX

    const btn = this.renderbutton();
    contentHolder.appendChild(btn);

    this.renderOnce("toggle", this.content, "toggleOld", contentHolder);
  }
  renderbutton() {
    const btn = document.createElement("button");
    btn.className = "btn switch";
    btn.innerText = "<->";
    btn.onclick = this.handleClick;
    
    this.SwitchButton = btn 
    return btn;
  }
  handleClick = () => {
    content1.classList.toggle("leftcontent");
    content2.classList.toggle("leftcontent");
    this.SwitchButton.classList.toggle("switchBtnClicked")
  };
}

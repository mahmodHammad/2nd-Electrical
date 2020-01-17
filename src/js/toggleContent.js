import renderer from "./index.js";

export default class Toggle extends renderer {
  constructor(scope) {
    super();
    this.content = scope;
    this.clicked = 0;

    // NEVER MIND ABOUT TOGGLE , TOGGLEOLD FOR NOW !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    this.toggle=0
    this.toggleOld= 0
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
    // const scope = this.content;
    const contentHolder = document.createElement("div");
    contentHolder.className = "contentHolder";

    const content1 = document.createElement("div");

    this.renderpdf(url1, content1);

    // url1 content here *********************

    content1.className = "subContent content1";
    content1.id = "content1";

    const content2 = document.createElement("div");

    this.renderpdf(url2, content2);
    this.render(content1, this.content);

    // url2 content here *********************

    content2.className = "subContent content2";
    content2.id = "content2";

    contentHolder.appendChild(content1);
    contentHolder.appendChild(content2);
    // scope.appendChild(contentHolder);
    const btn = this.renderbutton();
    contentHolder.appendChild(btn);

    // this.render(contentHolder, this.content);
    console.log("content" ,this.content)
    this.renderOnce('toggle',this.content ,'toggleOld',contentHolder)
  }
  renderbutton() {
    const btn = document.createElement("button");
    btn.className = "btn switch";
    btn.innerText = "switch";
    btn.onclick = this.handleClick;
    return btn;
  }
  handleClick = () => {
    content1.classList.toggle("leftcontent");
    content2.classList.toggle("leftcontent");
  };
}

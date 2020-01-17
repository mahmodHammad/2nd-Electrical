import renderer from "./index.js";

export default class Toggle {
  constructor(scope) {
    this.content = scope;
    this.clicked = 0;
    this.putContent();
  }

  putContent(url1, url2) {
    const scope = this.content;
    const contentHolder = document.createElement("div");
    contentHolder.className = "contentHolder";

    const content1 = document.createElement("div");
    content1.className = "subContent content1";
    content1.id = "content1";

    const content2 = document.createElement("div");
    content2.className = "subContent content2";
    content2.id = "content2";

    contentHolder.appendChild(content1);
    contentHolder.appendChild(content2);
    scope.appendChild(contentHolder);
    const btn = this.renderbutton();
    contentHolder.appendChild(btn);
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
    console.log(content1);
    console.log(content2);
  };
}

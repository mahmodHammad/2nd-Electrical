import renderer from "./index.js";

export default class Toggle extends renderer {
  constructor() {
    super();
  }

  loadcontent(data) {
    this.data = data;
  }

  renderToggle() {
    console.log(this.data);
  }
}

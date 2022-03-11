class Button {
    constructor(propText, count = 0){
        this.propText = propText;
        this.count = count;
    }
 
    mount(rootDiv, onClickCB){
        this.root = rootDiv;
        this.onClickCB = onClickCB
        this.render();
      }

    render() {
        //insert Button
        this.root.innerHTML = `<button>${this.propText}</button>`;
        //Adding event for the Button...
        this.root.firstElementChild
            .addEventListener('click', this.onClick.bind(this));
    }

    onClick() { 
        this.onClickCB()
        }
}
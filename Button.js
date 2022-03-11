class Button {
    constructor(propText, count = 0){
        this.propText = propText;
        this.count = count;
    }
 
    mount(rootDiv){
        this.root = rootDiv;
        this.render();
      }

    render() {
        //insert Button
        this.root.innerHTML = `<button>${this.propText}</button>`;
        //Add a event for the Button...
        this.root.firstElementChild
            .addEventListener('click', this.onClick.bind(this));
    }

    onClick() { 
        this.counting()
        }
//the function that calculates count of clicked on button
    counting() {
        this.count ++
        console.log(this.count)
    }
}
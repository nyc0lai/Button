

new Button()
    .mount(document.querySelector("#button-div"), function () {
            this.count++
            this.render()
        }
    )
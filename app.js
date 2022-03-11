

new Button("CLICK COUNT")
    .mount(document.querySelector("#button"), function () {
            this.count++
            console.log(this.count)
        }
    )


new Button("CLICK COUNT")
    .mount(document.querySelector("#button"), function () {
            console.clear()
            this.count++
            console.log(this.count)
        }
    )
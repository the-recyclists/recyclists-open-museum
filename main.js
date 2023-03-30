window.onload = function () {
    let navButtons = document.querySelectorAll(".button");
    for (let i = 0; i < navButtons.length; i++) {
        navButtons[i].addEventListener("mouseover", function () {
            this.style.backgroundColor = "white";
            this.style.fontFamily = "Fredoka One";
            this.style.borderRadius = "60px";
            this.style.width = "120px";
            this.style.height = "30px";
        });
        navButtons[i].addEventListener("mouseout", function () {
            this.style.backgroundColor = "";
            this.style.borderRadius = "";
            this.style.width = "100px";
            this.style.height = "50px";
        });
    }
}  
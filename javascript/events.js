function changeButton() {
    var text = document.getElementById("btn");
    if (text.innerHTML === "Click Me") {
        text.innerHTML = "Clicked!";
    } else {
        text.innerHTML = "Click Me";
    }
}

function changeFont() {
    var text = document.getElementById("pBold");
    text.style.fontWeight = "bold";
}
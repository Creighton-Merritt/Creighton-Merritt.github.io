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
    var att = document.createAttribute("style");
    att.value = "bold";
    text.setAttribute(att);
}
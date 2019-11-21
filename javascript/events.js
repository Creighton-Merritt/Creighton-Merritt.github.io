function changeButton() {
    var text = document.getElementById("btn");
    if (text.innerHTML === "Click Me") {
        text.innerHTML = "Clicked!";
    } else {
        text.innerHTML = "Click Me";
    }
}

function makeMeBold() {
    var text = document.getElementsByName("pBold");
    var att = document.createAttribute("style");
    att.value = "strong";
    text.setAttributeNode(att);
}
var fruits = 
    ["apple",
    "apricot",
    "avocado",
    "banana",
    "bell pepper",
    "blueberry",
    "blackberry",
    "blackcurrant",
    "blood orange"];
var int = 0

function addFruit() {
    if (int < 9) {
    data = fruits[int];
    var newItem = document.createElement("LI")
    var textNode = document.createTextNode(data);
    newItem.appendChild(textNode);

    var list = document.getElementById("list");
    list.insertBefore(newItem, list.childNodes[int]);
    int++;
    }
}

function addButton() {
    
    var button = document.createElement("button");
    button.onclick = function() { addFruit(); };
    button.innerHTML = "Display Fruits";
    var div = document.getElementById("newBtn");
    div.appendChild(button);
    var text = document.createElement("p");
    text.innerHTML = "<br>Here we created a new button element and added it into a div using 'appendChild'. Now click on the 'Display Fruits' button a few times to insert the name of fruits above the button using 'insertBefore'";
    div.appendChild(text);
    
}



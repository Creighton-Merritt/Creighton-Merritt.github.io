
class Items {
    constructor(item) {
        this.item = item;
    }
};

//Load the current list on page load
function display() {    
    localArr = JSON.parse(localStorage.getItem('localArr')) || [];
    for(var i=0; i < localArr.length; i++) {
        tbody = document.getElementById("tableBody");
        row = tbody.insertRow();
        cell1 = row.insertCell();
        cell1.innerHTML = localArr[i];
    }
};

//Add item to storage and add to the list table
function addToList() {
    var itemName = document.getElementById("itemName").value;

    if(itemName != "") {
        localArr = JSON.parse(localStorage.getItem('localArr')) || [];
        localArr.push(itemName);
        localStorage.setItem("localArr", JSON.stringify(localArr));

        tbody = document.getElementById("tableBody");
        row = tbody.insertRow();
        cell1 = row.insertCell();
        cell1.innerHTML = itemName;   

        document.getElementById("itemName").value = "";
    }
    console.log(localArr.length);
};

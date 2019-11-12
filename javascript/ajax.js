function getJson() {
    var xmlhttp = new XMLHttpRequest();
    var results = document.getElementById('display');
    var i = 0;
    
    xmlhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var data = JSON.parse(xmlhttp.responseText);
            do {
                results.innerHTML += data.fruits[i] + '<br>';
                i++;
            }
            while (i < 9)
        }
    };

    xmlhttp.open("GET", "https://creighton-merritt.github.io/topics/data.json", true);
    xmlhttp.send();
}

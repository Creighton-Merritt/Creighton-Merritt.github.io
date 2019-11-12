function getJson() {
    var xmlhttp = new XMLHttpRequest();
    var results = document.getElementById('display');

    xmlhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var data = JSON.parse(xmlhttp.responseText);
            for (i = 0; i < data.length; i++) {
                results.innerHTML += '<li>' + data[i] + '</li>';
                console.log(data);
            }
        }
    };

    xmlhttp.open("GET", "https://creighton-merritt.github.io/topics/data.json", true);
    xmlhttp.send();
}
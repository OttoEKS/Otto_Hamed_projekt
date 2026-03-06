// AJAX-XML Request för tabell av gymmen i Om oss sidan
function loadGyms() {
    var xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            myFunction(this.responseXML);
        }
    };

    xhttp.open("GET", "aktiv_gym.xml", true);
    xhttp.send();
}
// AJAX-XML function för att skriva ut tabellen
function myFunction(xmlDoc) {
    let table = "<table border='1'><tr><th>Namn</th><th>Adress</th><th>Kvm</th><th>Pris</th></tr>";

    var gyms = xmlDoc.getElementsByTagName("GYM");

    for (let i = 0; i < gyms.length; i++) {
        var namn = gyms[i].getElementsByTagName("NAMN")[0].textContent;
        var adress = gyms[i].getElementsByTagName("ADRESS")[0].textContent;
        var kvm = gyms[i].getElementsByTagName("KVADRAT")[0].textContent;
        var pris = gyms[i].getElementsByTagName("PRIS")[0].textContent;
       
        table += `<tr><td>${namn}</td><td>${adress}</td><td>${kvm}</td><td>${pris}</td></tr>`;
    }

    table += "</table>";

    document.getElementById("gyms").innerHTML = table;
}
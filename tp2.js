window.onload = main;
var faker = require('faker');

function generer(nbr) {
    if (nbr == 0)
        return faker.name.lastName();
    if (nbr == 1)
        return faker.name.firstName();
    if (nbr == 2)
        return faker.address.city();
    if (nbr == 3)
        return faker.name.jobType();
    if (nbr == 4) 
        return faker.phone.phoneNumber();
    if (nbr == 5) 
        return faker.date.month();
}


function tableau() {
    var tab = document.getElementById("tableau")
    for (var ligne = 0; ligne < 50; ligne++) {
        var tr = document.createElement("tr");
        for (var cellule = 0; cellule < 6; cellule++) {
            var td = document.createElement("td");
            var text = document.createTextNode(generer(cellule));
            td.appendChild(text);
            tr.appendChild(td);
        }
        tab.appendChild(tr);
    }
    
}

function tri(id) {
    var lignes = document.getElementById("tableau").rows;
    var tab = new Array(50);
    for (let i = 1; i <= 50; i++) 
        tab[i-1] = lignes[i].cells[id].innerHTML;
    tab.sort();
    for (let i = 1; i <= 50; i++)
        lignes[i].cells[id].innerHTML = tab[i-1];
}



function main(){ 
    tableau();
}
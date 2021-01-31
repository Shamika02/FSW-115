var superHeros = [
    "Luke Skywalker",
    "C-3PO",
    "R2-D2",
    "Darth Vader",
    "Leia Organa",
    "Owen Lars",
    "Beru Whitesun lars",
    "R5-D4",
    "Biggs Darklighter",
    "Obi-Wan Kenobi",

]
var herosList =document.getElementById("heros")

for (var i = 0; i <superHeros.length; i++) {
var newName = document.createElement("li")
newName.textContent = superHeros[i]
herosList.append(newName)

}



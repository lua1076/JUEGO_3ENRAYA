let juegan = "X";

function marcarCasillas(evt) {
    evt.currentTarget.textContent = juegan;
    if(juegan == "X") {
        juegan = "O";
    } else {
        juegan = "X";
    }
    //juegan = juegan == "X" ? "O" : "X";
}

const casillas = document.getElementsByClassName('casilla');
for (const casilla of casillas) {
    casilla.addEventListener("click", marcarCasillas);
}
var tablero = [0, 0, 0, 0, 0, 0, 0, 0, 0];
var jugador = 1;

// Dibujar tablero
function dibujar() {
    for (i = 0; i < 9; i++) {
        if (tablero[i] == 0) document.getElementById("celda" + i).style = "background-color: white !important";
        if (tablero[i] == 1) document.getElementById("celda" + i).style = "background-color: red !important";
        if (tablero[i] == 2) document.getElementById("celda" + i).style = "background-color: blue !important";
    }
}

function pcelda(celda) {
    if (tablero[celda] == 0) {
        if (jugador == 1) {
            tablero[celda] = 1;
            jugador = 2;
        } else {
            tablero[celda] = 2;
            jugador = 1;
        }
    } else {
        alert("No puedes pulsar sobre una celda coloreada");
    }
    dibujar();
    let r = ganador();
    switch (r) {
        case 0:
            break;
        case 1:
            alert("¡Ganó el rojo!");
            break;
        case 2:
            alert("¡Ganó el azul!");
            break;
        case 3:
            alert("¡Empate!");
            break;
    }
}

function ganador() {
    var numEspacios = 0;
    for (i = 0; i < 9; i++) {
        if (tablero[i] == 0) numEspacios++;
    }
    // Las líneas horizontales
    if (tablero[0] == tablero[1] && tablero[1] == tablero[2] && tablero[0] != 0) return tablero[0];
    if (tablero[3] == tablero[4] && tablero[4] == tablero[5] && tablero[3] != 0) return tablero[3];
    if (tablero[6] == tablero[7] && tablero[7] == tablero[8] && tablero[6] != 0) return tablero[6];
    //Las líneas verticales
    if (tablero[0] == tablero[3] && tablero[3] == tablero[6] && tablero[0] != 0) return tablero[0];
    if (tablero[1] == tablero[4] && tablero[4] == tablero[7] && tablero[1] != 0) return tablero[1];
    if (tablero[2] == tablero[5] && tablero[5] == tablero[8] && tablero[2] != 0) return tablero[2];
    //Las diagonales
    if (tablero[0] == tablero[4] && tablero[4] == tablero[8] && tablero[0] != 0) return tablero[0];
    if (tablero[2] == tablero[4] && tablero[4] == tablero[6] && tablero[2] != 0) return tablero[2];

    if (numEspacios > 0) {
        return 0;
    } else {
        return 3;
    }
}
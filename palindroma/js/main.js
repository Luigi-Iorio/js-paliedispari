"use strict";

// Richiesta parola all'utente
const parola = prompt("Inserisci una parola");

// Creazione di due array dove andranno inserite le lettere della parola
// Primo array lettere inserite in ordine dalla prima lettera all'ultima
const arrayUno = [];
// Secondo array lettere inserite in ordine dall'ultima lettera alla prima
const arrayDue = [];

// messagio - lettera di default
let messaggio = "";
let lettera = "";

// funzione per inserire le lettere negli array e per verificare se la parola è palindroma
function palindroma() {
  // inserimento lettere primo array
  for (let i = 0; i < parola.length; i++) {
    lettera = parola[i];
    arrayUno.push(lettera);
  }

  // insermento lettere secondo array
  for (let x = parola.length - 1; x >= 0; x--) {
    lettera = parola[x];
    arrayDue.push(lettera);
  }

  // verifica della parola
  if (arrayUno.toString() === arrayDue.toString()) {
    console.log(`La parola: ${parola}, è palindroma`);
  } else {
    console.log(`La parola: ${parola}, non è palindroma`);
  }
}

palindroma();

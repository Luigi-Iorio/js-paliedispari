"use strict";

// Richiesta parola all'utente
const parola = prompt("Inserisci una parola");

// PRIMO METODO - array / ciclo for
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

/*
DIVISORE DELLE DUE MODALITÀ
*/
console.log("--- DIVISORE MODALITÀ ---");
/*
/ DIVISORE DELLE DUE MODALITÀ
*/

// SECONDO METODO - ciclo while
// funzioni
function isPalindroma(word) {
  if (word === "") return false;
  if (word.length === 1) return true;

  // rendiamo tutto minuscolo
  const parolaMinuscolo = word.toLowerCase();

  // ciclo while per confrontare le lettere grazie agli indici (start, end)
  let start = 0;
  let end = word.length - 1;

  while (start < end) {
    if (parolaMinuscolo[start] !== parolaMinuscolo[end]) return false;
    start++;
    end--;
  }

  return true;
}

// programma
if (isPalindroma(parola)) {
  console.log("Palindroma");
} else {
  console.log("Non palindroma");
}

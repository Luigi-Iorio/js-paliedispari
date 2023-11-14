"use strict";

// funzioni
function numeroRandom() {
  numeroComputer = Math.floor(Math.random() * 5) + 1;
}

function pariDispari() {
  if (somma % 2 === 0) {
    console.log(`La somma è ${pari}, ${somma}`);
    risultato = pari;
  } else {
    console.log(`La somma è ${dispari}, ${somma}`);
    risultato = dispari;
  }
}
// /funzioni

// Variabili
// richiesta pari o dispari
const richiesta = prompt("Scegliere tra pari o dispari");
// richiesta numero da 1 a 5
const numeroUtente = +prompt("Inserisci un numero da 1 a 5");
// default
const pari = "pari";
const dispari = "dispari";
let numeroComputer = 0;
let risultato = "";
let somma = 0;

// log scelta del giocatore
console.log(`Il giocatore ha scelto ${richiesta}`);
// log numero utente
console.log(`Il numero inserito dall'utente è: ${numeroUtente}`);
// calcolo numero random
numeroRandom();
// log numero del computer
console.log(`Il numero del computer è: ${numeroComputer}`);
// calcolo somma
somma = numeroUtente + numeroComputer;
// verifca pari o dispari + log somma
pariDispari();
// log vincitore
if (richiesta.toLocaleLowerCase() === pari && risultato === pari) {
  console.log("Il giocatore ha vinto");
} else if (richiesta.toLocaleLowerCase() === dispari && risultato === dispari) {
  console.log("Il giocatore ha vinto");
} else {
  console.log("Il computer ha vinto");
}

# Palindroma e Pari - Dispari

## Descrizione Esercizio Uno

L'obbietivo di questo esercizio è quello di creare una funzione per capire se la parola inserita dall'utente è palindroma.

### Risoluzione in linguaggio naturale

1. Chiedere all'utente di inserire una parola - **_tramite prompt()_**
2. Creare una funzione
3. Nella funzione scrivere le condizioni per il quale la parola é palindroma - **(se letta in avanti o in dietro ha lo stesso significato)**
4. Richiamare la funzione

### Conclusioni

Per capire se la parola è palindroma ho deciso di creare due **array** inizialmente vuoti, due **cicli for** che avevano il compito di pushare le lettere in ordine inverso nei due array e una **condizione finale** per confrontare le lettere.

Per confrontare correttamente i due array ho convertito i loro valori in stringa con il metodo **_toString()_**.

## Descrizione Esercizio Due

L'obbiettivo del secondo esercizio è stabilire chi è il vincitore al gioco pari o dispari. L'utente inserisce un numero da 1 a 5 mentre per il computer il numero da 1 a 5 sarà generato randomicamente.

### Risoluzione in linguaggio naturale

1. Creare un prompt() per la richiesta pari o dispari
2. Creare un prompt() per l'inserimento del numero da 1 a 5
3. Creare randomicamente _(Math.floor(Math.random))_ il numero per il computer - usando una funzione
4. Sommare i 2 numeri
5. Stabilire se la somma è pari o dispari (somma % 2 = 0) il numero è pari altri è dispari - usando una funzione
6. Dichiarare il vincitore

### Conclusioni

Per dichiarare il vincitore ho dovuto dichiarare e assegnare delle variabili predefinite come:

```js
const pari = "pari";
const dispari = "dispari";
let risultato = "";
```

Con l'aggiunta di queste variabili avevo tutti gli elementi per decretare il vincitore e con il metodo **_toLowerCase()_** avevo la sicurezza che il confronto tra la variabile e il dato inserito fosse corretto.

Quindi la condizione finale che ho utilizzato per decretare il vincitore è:

```js
if (richiesta.toLowerCase() === pari && risultato === pari) {
  console.log("Il giocatore ha vinto");
} else if (richiesta.toLowerCase() === dispari && risultato === dispari) {
  console.log("Il giocatore ha vinto");
} else {
  console.log("Il computer ha vinto");
}
```

/* Scrivi una funzione che accetti un'array di stringhe e una lettera e restituisca un array contenente solo le parole che iniziano con quella lettera */

const names = ["Anna", "Luca", "Marco", "Adele", "Laura", "Alessandra"];

// Dichiara la funzione qui.

let onlyLetterA = (value) => { //Funzione versione arrow 
    let letterA = [];
    for (let i = 0; i < value.length; i++) {
        if (value[i][0] === "A") {
        letterA.push(value[i]);
        }
    }
    console.log(letterA);
}

// Invoca la funzione qui e stampa il risultato in console

onlyLetterA(names);

//Risultato atteso se si passa la lettera A: ["Anna", "Adele", "Alessandra"]
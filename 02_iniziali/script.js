/* Scrivi una funzione che accetti un array di nomi e restituisca nuovo un array con le iniziali di ogni parola dell'array fornito */

const names = ["Anna", "Luca", "Marco", "Adele", "Giovanni", "Alessandra"];

// Dichiara la funzione qui.

let onlyInitials = (value) => {  //Funzione versione arrow 
    let initials = [];
    for (let i = 0, i < value.length; i++); {
        initials.push(value[i][0]);
    }
     console.log(initials);
}

// Invoca la funzione qui e stampa il risultato in console

onlyInitials (names);

//Risultato atteso: ["A", "L", "M", "A", "G", "A"]
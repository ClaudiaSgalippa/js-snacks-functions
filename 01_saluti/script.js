/* Scrivi una funzione che accetti una stringa contenente un nome e restituisca un saluto seguito dal nome fornito (es. "Ciao [nome]") */

const userName = 'Mario';

// Dichiara la funzione qui.

const saluto1 = (userName) => console.log(`Benvenuto ${userName}`); //Funzione versione arrow compatta
const saluto2 = (userName) => { //Funzione versione arrow 
    console.log(`Benvenuto ${userName}`);

}

// Invoca la funzione qui e stampa il risultato in console

saluto1(userName)
saluto2(userName)

//Risultato atteso se si passa 'Mario': // ciao Mario

//"Benvenuto Mario"

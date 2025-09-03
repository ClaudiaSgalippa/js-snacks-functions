/* Scrivi una funzione che accetti una stringa e restituisca il numero di vocali contenute al suo interno */

const word = 'javascript';

// Dichiara la funzione qui.

vowelsInString = (value) => { //Funzione versione arrow 
    let vowels = ['a', 'e', 'i', 'o', 'u'];
    for (let i = 0; i < value.length; i++) {
        if (value[i][0] === 'vowels') {
            vowels.push(value[i]);
        }
    }
    console.log(vowels);
}

// Invoca la funzione qui e stampa il risultato in console

vowelsInString(word);

//Risultato atteso se si passa 'javascript': 3 (a, a, i)

//DA RIVEDERE DOMANI 
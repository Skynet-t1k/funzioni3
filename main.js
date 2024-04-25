// Scrivi una funzione che dato un numero intero (massimo 9999) conti da quante cifre è formato.

// Esempio:
// Input : 9 → output: 1 cifra
// Input : 99 → output: 2 cifre
// Input: 12000 → output: Numero troppo grande

function cypherCounter(numero){
    let output;
    if (numero > 9999){
        output = 'Numero troppo grande';
        return output;
    }
    else {
        let arrayNumero = numero.toString().split("");
        output = arrayNumero.length;
        return output;
    }
}

let verifica = cypherCounter(1);
let verifica1 = cypherCounter(44);
let verifica2 = cypherCounter(555);
let verifica3 = cypherCounter(9999);
let verifica4 = cypherCounter(10000);

console.log(verifica, verifica1, verifica2, verifica3, verifica4);
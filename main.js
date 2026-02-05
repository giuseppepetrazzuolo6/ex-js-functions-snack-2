/*🏆 Snack 1
Crea una funzione che somma due numeri.
Crea una funzione dichiarativa chiamata somma che accetta due numeri e restituisce la loro somma.
Poi, definisci la stessa funzione somma ma come funzione anonima assegnata a una variabile
Quindi, riscrivi la funzione somma con la sintassi delle arrow functions.*/

/*
function somma(a, b) {
    return a + b
}
console.log(somma(3, 4))
*/
/*
const somma = function (a, b) {
    return a + b
}
console.log(somma(4, 7))
*/

const somma = (a, b) => a + b
console.log(somma(5, 5))

/*🏆 Snack 2
Crea una arrow function che calcola il quadrato di un numero.
Definisci una funzione chiamata quadrato che accetta un numero e restituisce il suo quadrato in una sola riga.*/

const quadrato = (num) => num * num
console.log(quadrato(3))

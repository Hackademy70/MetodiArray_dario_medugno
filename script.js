/* ES.1
   Scrivi una funzione che prenda in input una stringa e restituisca TRUE se è palindroma, FALSE se non lo è.
   - Nel controllo scarta gli spazi e i segni di punteggiatura.
*/

function isPalindrome(str) {
     // rimuove gli spazi ed i segni di punteggiatura dalla stringa
    str = str.replace(/\W/g, "");
     
    // metodo per convertire stringa in minuscolo
    
    str = str.toLowerCase();
     
    let reverse = str.split("").reverse().join("");

 if( str === reverse){
    return true;
    } else {
    return false;
}
}

console.log(isPalindrome("i topi non avevano nipoti"));  // true
console.log(isPalindrome("Hello, Dario")); // false

/* ES.2
   Scrivi un programma che dati:-2 array di 10 elementi interi casuali compresi tra 1 e 10, permetta
   di effettuare, una delle seguenti operazioni. Addizione-Sottrazione-Moltiplicazione-Divisione
   -Esegua il calcolo tra ogni elemento dei due array, salvando ciascun risultato in un terzo array d'appoggio.
*/

let a = [1, 3 ,5 , 2 , 6, 8, 9, 7, 4, 10];

let b = [9, 3 ,1 , 4 , 7, 6, 5, 10, 1, 5];

// addizione
let sum = [];
for (let i = 0; i < a.length; i++) {
  sum.push(a[i] + b[i]);
}
console.log(sum); 

// sottrazione
let sottr = [];
for (let i = 0; i < a.length; i++) {
  sottr.push(a[i] - b[i]);
}
console.log(sottr);

// moltiplicazione
let moltiplication = [];
for (let i = 0; i < a.length; i++) {
  moltiplication.push(a[i] * b[i]);
}
console.log(moltiplication);


// divisione
let division = [];
for (let i = 0; i < a.length; i++) {
  division.push(a[i] / b[i]);
}
console.log(division);


// terzo array
let c = [];
for (let i = 0; i < a.length; i++) {
  c.push(a[i] + b[i]);
}
console.log(c);

/* ES.3 
   Scrivi un programma che dato un array di numeri, calcoli la media dei valori e restituisca in output la media e tutti i valori minori della media.
   -Variante
   Stampa anche quanti sono i valori minori della media e quanti quelli maggiori.
*/

let numbers = [3, 5, 10, 2, 8];

let media = numbers.reduce((acc, cur) => acc + cur) / numbers.length;

//filter
let minValors = numbers.filter((num) => num < media);

// Stampa valori

console.log(`Media: ${media}`);

console.log(`I valori minori della media sono: ${minValors}`);



// - variante
let maxValors = numbers.filter((num) => num > media);


console.log(`Numeri valori minori della media: ${minValors.length}`);
console.log(`Numeri valori maggiori della media: ${maxValors.length}`);


/* ES.4 
   Scrivi una funzione che permetta di calcolare la somma dei numeri all'interno di un array.
   - dato di partenza, let numbers = [10,20,30,40];
   - Il risultato dovrà restituire = 100;
*/

function sumArray(numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
      sum += numbers[i];
    }
    return sum;
  }

  let numbers1 = [10, 20, 30, 40];
  let result = sumArray(numbers1);
  console.log(result);

  /* ES.5
     Scrivere un programma che permetta di ottenere un nuovo array che abbia come valori i numeri del primo array sommati con i valori del secondo array.
     - let numbers1 = [10,20,30];
     - let numbers2 = [40,50,60];
     - dovrà restituire come risultato, let newArray = [50, 70, 90];
  */

     let numbers2 = [10,20,30];
     
     let numbers3 = [40,50,60];

     let newArray = [];

     
     for(let i = 0; i < numbers2.length; i++){
        newArray.push(numbers2[i] + numbers3[i]);
     }
     
     console.log(newArray);

   /* 
     ES.6
     Scrivere un programma che permetta di filtrare soltanto le parole all'interno di un array:
     - let mixArray = [1, true, 'hackademy, 100, 'Javascript', false, null , 'php'];
     - il risultato dovrò dare, let filtered = ['hackademy', 'Javascript', 'php'];
   */

     let mixArray = [1, true, 'hackademy', 100, 'Javascript', false, null, 'php'];
     let filtered = [];

     // filtrare solo parole in un array
     for (let i = 0; i < mixArray.length; i++) {
        if (typeof mixArray[i] == 'string'){
            filtered.push(mixArray[i]);
         }
      }

      console.log(filtered);

    /* ES.7
         Scrivere un programma che permetta di stabilire se è presente, nell'array di partenza, il marchio "Volvo":
       - array di partenza, let cars = ["Saab", "Volvo", "BMW"];
       - se è presente, stampare in console: "Nel garage è presente il modello Volvo";
       - suggerimento: utilizzare il metodo includes().
     */

     let cars = ["Saab", "Volvo", "BMW"];

     // controllo se l'array contiene "Volvo"
     
     
     if(cars.includes("Volvo")){
        console.log("Nel garage è presente il modello Volvo.");
     }
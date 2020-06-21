
//commento una riga 
/* commento blocco */

//var globali
var nome="andrea"
var cognome="dattola"
var eta=24
const serverURL = "https://........"

const numeri = [1,2,3,4,5]
//dichiarazione funzione 
function saluta(){
    //scope isolato
    let eta = 12;
    console.log("ciao: "+ nome+" "+cognome+" "+eta)
}
//richiamo la funzione
//saluta();

/*
console.log(numeri)

for(var i = 0; i<numeri.length; i++){
    console.log(i); //posizioni
    console.log(numeri[i]) // contenuto
    
}

function c(){
    var x = 1;
    
}

console.log(x)
*/

//template literal immagina al posto di ciao sono mettere tag html alt96 per il backtick
let obj = {
    nome : 'andre',
    cognome : 'dattola'
}

let persona = `ciao sono ${obj.nome}
 stringa e posso aggiungere quello che voglio, tutto quello che è dentro dollaro graffe è interpretao da javascript come codice eseguibile
${obj.cognome}
${10+20}

`;
//console.log(persona);

//controllo flusso 
function calcolatrice(op){
switch (op) {
    case 'somma':
        console.log("operaz somma")
        break;

    default:
        break;
}
}
calcolatrice('somma');
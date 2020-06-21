function Animale(n,t,){

    this.nome = n;
    this.razza = t;
    this.abitat = 'terra'

}
Animale.prototype.legs = 4
let gatto = new Animale('sergio','europeo')
let cane = new Animale('pluto','dalmata');
// console.log(cane.nome)
// console.log(cane.razza)
// console.log(cane)
//console.log(gatto)

let animalstore = []
animalstore.push(gatto,cane)
console.log(animalstore)

// let cane1 = {
//    nome : 'pippo',
//    cognome: 'dattola',
//    tipo: 'animale',
//    razza: 'dalmata',
//    abitat : 'terra',
//    vaccini: [],
//    zampe: 4

// }

// let gatto =  {

//     nome : 'pippo',
//     cognome: 'dattola',
//     tipo: 'animale',
//     razza: 'dalmata',
//     abitat : 'terra',
//     vaccini: [],
//     zampe: 4

// }
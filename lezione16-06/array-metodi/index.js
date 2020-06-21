// var numeri = [2,3,4,5,6];
// let numeriPari = numeri.filter(function(elemento,index){
//     return elemento%2 == 0;
// }); //l'elemento che scorre numeri e index la posizione 
// //console.log(numeriPari)

//[3,5,6,7,8,9].forEach((ele) => {
    //console.log(ele)   });

let array1= [1,2,3,4];
const reducer = (x,y) => (x+y)
console.log(array1.reduce(reducer))
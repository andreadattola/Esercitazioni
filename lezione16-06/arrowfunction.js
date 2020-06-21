// var obj = {
//     nome: 'andrea',
//     cognome: ' rossi',
//     saluta: function(){
//         var self = this;
//         setTimeout(function(){
//             console.log('ciao'+ self.nome+ "" + self.cognome)
//         },2000);


//     }
// }

// obj.saluta();


var obj = {
    nome: 'andrea',
    cognome: ' rossi',
    saluta: function(){
        
        setTimeout(()=>{
            console.log('ciao'+ this.nome+ "" + this.cognome);
        },2000);


    }
}

obj.saluta();
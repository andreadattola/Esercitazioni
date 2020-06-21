function Persona(n,c,cf,){
    this.nome = n;
    this.cognome = c;
    this.cf = cf
}








function scriviStorage(){

    let anagrafe = JSON.parse(window.localStorage.getItem('persone')) ?? [];

    var codfisc = document.getElementById('cf').value;
    var name = document.getElementById('nome').value;
    var cognome = document.getElementById('Cognome').value;
    var man = new Persona(name,cognome,codfisc);
    let counter = false; 
    
    
//     for ( var i = 0 ; i<anagrafe.length; i++){
//     if(codfisc == anagrafe[i].codfisc){
//         console.log(i.codfisc +"  "+ codfisc)
    
//         alert('not aggiunto')
        
//     } else{ anagrafe.push(man)}
 
// }

        if (anagrafe.length == 0){
            addPersona();
        } else if (anagrafe.length > 0){
            anagrafe.forEach(ele => {
                console.log(ele['cf'], codfisc)
                ele['cf'] == codfisc ? counter = true : null
            })
        } 
        counter == true ? alert('trovato cf') : addPersona();





function addPersona(){

    
    anagrafe.push(man);
    window.localStorage.setItem('persone', JSON.stringify(anagrafe));
    

}


}

      

    //         for(i = 0; i<anagrafe.length; i++){ 
    //             console.log('for '+anagrafe[i].codfisc)
    //             //i.codfisc è il codicefiscale
                    
    //             if (codfisc != anagrafe[i].codfisc){
                    
                    
                    
                                       
    //             } else
    //              {
    //                  alert("cf uguali")
    //                }
                 
                    
    
    //     }
    //  } 
 
   
//scrittura storage
    //window.localStorage.setItem('utenti', JSON.stringify(persona));

//lettura storage
//let datoLetto = JSON.parse(window.localStorage.getItem('utenti'));
//console.log(datoLetto)




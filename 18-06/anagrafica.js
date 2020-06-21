// esercizio fatto dal prof

function Persona(n,c,cf){
  this.nome= n;
  this.cognome = c;
  this.codicefiscale = cf


}
function removeItem () {
    const ul = document.querySelector('#lista');
    const il = document.querySelector('li');
    const span = document.querySelector('.spanner')
    ul.addEventListener('click', function(e) {
     
        this.removeChild(e.target);
        var eliminated = e.target.innerText
  
        localStorage.removeItem(eliminated)
        
      })
}

let anagrafica = [];
let totContatti = 0;
window.onload = () => {
    if(window.localStorage.getItem('utenti')!=null){

        let datiStore = JSON.parse(window.localStorage.getItem('utenti'));
       
        anagrafica = datiStore; //inizializzato anagrafica con i dati nella localstorage
        addContatti();

removeItem()
        
}updateCounter();}

function addContatti(){
    let datiStore = JSON.parse(window.localStorage.getItem('utenti'));
    anagrafica = datiStore;
    let list = document.getElementById('lista')
    anagrafica.forEach((p) =>{
       
        let elementlist= document.createElement('li')
        elementlist.classList.add('form-control','my-2','py-2')
        elementlist.innerText=p['nome']+' '+p['cognome']+' '+p['codicefiscale']
        
        list.appendChild(elementlist);
        var span = document.createElement('span');
        span.classList.add('fa', 'fa-trash','spanner');
        elementlist.appendChild(span)
    }

    );
}


//let p = new Persona('mario','bianchi','cf12')
//let p2 = new Persona('maria','bianchetti','cf23')

//anagrafica.push(p)
//anagrafica.push(p2)
function azzeraForm(){
    document.getElementById('nome').value="";
    document.getElementById('cognome').value="";
    document.getElementById('cf').value="";
}
function updateCounter(){
    totContatti = anagrafica.length;
    document.getElementById('contatoreContatti').innerHTML=totContatti;

}

function salvaDatiStorage(n,c,cf){ //pusha nella localstorage se rispetta il codfisc 
    var p = new Persona(n,c,cf);
    anagrafica.push(p);
    window.localStorage.setItem('utenti',JSON.stringify(anagrafica));
    azzeraForm();
    document.getElementById('cf').classList.remove('erroreCF');
    updateCounter();
    //add list item aggiunge al click salva elemento in lista contatti
    
     let list = document.getElementById('lista')
     let elementlist= document.createElement('li')
    elementlist.classList.add('form-control','my-2','py-2')
     elementlist.innerText=p['nome'] + ' '+p['cognome']+ ' '+p['codicefiscale'];
    // elementlist.classList.add('remove');
    
    list.appendChild(elementlist);
     var span = document.createElement('span');
     span.classList.add('fa', 'fa-trash', 'spanner', 'text-right');
    
     elementlist.appendChild(span)  
   



}

function creaSpan(){

    
}


function inviadati(){ //SIMULANDO DB --> COME STORAGE

let nomeInput = document.getElementById('nome').value;
let cognomeInput=document.getElementById('cognome').value
let codicefiscaleInput= document.getElementById('cf').value;
let trovato = false;
//validation blank space
if (nomeInput == '' || cognomeInput =='' || codicefiscaleInput==""){
    alert('tutti i campi sono obbligaotori')
} else {

    if(anagrafica.length > 0){
        //c'è almeno una persona in anagrafica
        //in questo caso devo controllare che all'interno dell'array di oggetti non ci sia una persona con lo stesso codice fiscale 
        anagrafica.forEach((p) => {
            if(p.codicefiscale == codicefiscaleInput){ //matching
                trovato = true;
                return;
            }
        });

        if(!trovato){
            salvaDatiStorage(nomeInput,cognomeInput,codicefiscaleInput);
            alert('utente inserito')
           


        } else {
            alert('utente gia presente')
            document.getElementById('cf').classList.add('erroreCF');
        }

    }else {
        //anagrafica is empty
        salvaDatiStorage(nomeInput,cognomeInput,codicefiscaleInput)

        alert('utente inserito')


    }

}
//utenti corrisponde alla chiave conservata nello storage
//window.localStorage.setItem('utenti',JSON.stringify(anagrafica)); 

console.log(nomeInput +' '+ cognomeInput+ ' '+codicefiscaleInput)



}










function Persona(n, c, cf) {
   this.nome = n;
   this.cognome = c;
   this.codicefiscale = cf;
}

function visualizzaContatto(cf){

      if(cf != undefined && cf!= ''){



anagrafica.forEach((ele)=>{

   let ul = document.createElement('ul');
   ul.classList.add('list-group','list-group-flush');
   ul.id='mylistSearch'; //aggiunge l'id
   let tagLi = '';
   document.getElementById('risultatiRicerca').appendChild(ul);

   if(ele.codicefiscale == cf){
      tagLi += `<li class="list-group-item"> ${ele.nome} ${ele.cognome} <span class="ccf">${ele.codicefiscale}</span>
      <span><i class="fa fa-trash text-danger float-right" aria-hidden="true" onclick="eliminaContatto('${ele.codicefiscale}')"></i></span></li> `;

      document.getElementById('mylistSearch').innerHTML = tagLi;
      return;
   }

});


      }else {
         document.getElementById('mylistSearch').remove();
         document.getElementById('searchCF').value='';
      }

}


function cercaContatto(){
  let cf = document.getElementById('searchCF').value;
  
  visualizzaContatto(cf);


}


function eliminaContatto(cf){
   let res= confirm(`sei sicuro di voler eliminare il cf ${cf}..?`)
   if (res){
      //significa che ho cliccato okei
      console.log('okei')
     

     anagrafica.forEach((ele)=> {

      if(ele['codicefiscale']==cf){

        anagrafica.splice(ele['codicefiscale'],1)

        window.localStorage.setItem('utenti', JSON.stringify(anagrafica));

         updateCounter();
         aggiornaListaContatti();
         visualizzaContatto();
        return;
        //console.log('cancellato',anagrafica)
        //window.localStorage.removeItem('utenti',ele['codicefiscale'])
      }
   }); 

   }

}

let anagrafica = [];
let totContatti = 0;

//init dell'applicazione
window.onload = () => {
   if (window.localStorage.getItem('utenti') != null) { // verifico che ci siano persone nello storage
      let datiStorage = JSON.parse(window.localStorage.getItem('utenti'));
      anagrafica = datiStorage; // ho inizializzato l'anagrafica con i dati presenti nello store
   }
   updateCounter();
   aggiornaListaContatti(); //metodo che ha il compito di aggiornare la lista dei miei contatti
};

function aggiornaListaContatti(){
//devo far creare questo elemento html
  // <ul class="list-group list-group-flush" id="mylist">
//   <li class="list-group-item">mario bianchi <span class="ccf">MB</span>
//       <span><i class="fa fa-trash text-danger float-right" aria-hidden="true" onclick="eliminaContatto()"></i></span></li>
 //</ul>
let ul = document.createElement('ul');
ul.classList.add('list-group','list-group-flush');
ul.id='mylist'; //aggiunge l'id
let tagLi = '';
document.getElementById('contatti').appendChild(ul);
anagrafica.forEach((ele) => {
   tagLi += `<li class="list-group-item"> ${ele.nome} ${ele.cognome} <span class="ccf">${ele.codicefiscale}</span>
   <span><i class="fa fa-trash text-danger float-right" aria-hidden="true" onclick="eliminaContatto('${ele.codicefiscale}')"></i></span></li> `;
});
document.getElementById('mylist').innerHTML = tagLi




}

function updateCounter(){
   totContatti = anagrafica.length;
   document.getElementById('contatoreContatti').innerHTML = totContatti;
}

function azzeraForm() {
   document.getElementById('nome').value = '';
   document.getElementById('cognome').value = '';
   document.getElementById('cf').value = '';
}

function salvaDatiStorage(n, c, cf) {
   let p = new Persona(n, c, cf);
   anagrafica.push(p);
   window.localStorage.setItem('utenti', JSON.stringify(anagrafica));
   azzeraForm();
   updateCounter();
   document.getElementById('cf').classList.remove('erroreCF');
   aggiornaListaContatti();
}

function inviadati() {
   let nomeInput = document.getElementById('nome').value;
   let cognomeInput = document.getElementById('cognome').value;
   let cfInput = document.getElementById('cf').value;
   let trovato = false;

   //validazione campi vuoti
   if (nomeInput == '' || cognomeInput == '' || cfInput == '') {
      alert('Tutti i campi sono obbligatori');
   } else {
      if (anagrafica.length > 0) {
         // vuol dire che c'è almeno una persona nell'array
         // devo controllare che all'interno dell'array anagrafica non ci sia un'altra persona con lo stesso cf
         anagrafica.forEach((p) => {
            if (p.codicefiscale == cfInput) {
               trovato = true;
               return;
            }
         });
         if (!trovato) {
            salvaDatiStorage(nomeInput, cognomeInput, cfInput);
            alert('Utente inserito con successo');
         } else {
            alert('Utente già presente');
            document.getElementById('cf').classList.add('erroreCF');
         }
      } else {
         // l'anagrafica è vuota
         salvaDatiStorage(nomeInput, cognomeInput, cfInput);
         alert('Utente inserito con successo');
      }
   }
}

// al salva deve aggiornarsi un elenco puntato sotto "I tuoi contatti:", da anagrafica, per ogni li un'icona cestino che elimini il contatto, sia da anagrafica che da storage e si deve aggiornare il numeretto. Invec che alert confirm, se sì eliminiamo dallo storage

// sotto cerca facciamo il cerca
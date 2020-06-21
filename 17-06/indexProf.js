


//es fatto al corso 



const province = {
    ct: ['aci catena', 'bronte', 'Catania'],
    en: ['messina', 'capo d orlando'],
    me:[{id:'me',nome:'messina'},{id:'to',nome:'tortorici'}]
}

function getComuni(key) {
    return province[key]; // è un array 
}

function selezionato() {//
    let key = document.getElementById('province').value;

    let domComuni = document.getElementById('comuni');

    if (domComuni) {
        domComuni.remove();
    }



    //sto creando una select statica 
    let selectComuni = document.createElement('select'); //<select></select>
    selectComuni.classList.add('form-control', 'mt-4'); // <select class="form-control mt-4"></select>
    selectComuni.id = "comuni"; // <select class="form-control mt-4" id="comuni"></select>

    // getComuni(key).map((comune) => {
    //     let option = document.createElement('option'); // <option></option>    
    //     option.text = comune;
    //     option.value = comune;
    //     selectComuni.add(option);

    // });

    // for (let i in getComuni(key)) {
    //     let option = document.createElement('option'); // <option></option>    
    //     option.text = getComuni(key)[i];
    //     option.value = getComuni(key)[i];
    //     selectComuni.add(option);
    // }

    // for (let i of getComuni(key)) {
    //     let option = document.createElement('option'); // <option></option>    
    //     option.text = i;
    //     option.value = i
    //     selectComuni.add(option);
    // }



    //document.getElementById('contentSelectComuni').appendChild(selectComuni);

    // console.log(getComuni(key));
    // for(let i in getComuni(key)){
    //     console.log("indice: ->"+i+" valore: ->"+getComuni(key)[i]);
    // }

    // for(let i of getComuni(key)){
        
    //     console.log(i)
    // }

}


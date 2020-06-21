const regioni = {
    Lombardia: ['milano', 'famagosta', 'milanOvest'],
    Lazio: ['roma', 'ostia', 'tre1'],
    Toscana:['fi', 'li', 'pi']
}


const provinceArr = {
    milano: ['aci catena', 'bronte', 'Catania'],
    famagosta: ['famagosta1', 'famagosta2'],
    milanOvest:['mi', 'duo', 'tre'],
    //lazio
    roma: ['centocelle', 'bronte', 'Catania'],
    ostia: ['d1', 'capo d orlando'],
    tre1:['t1i', 'duo', 'tre'],
    //toscana
    
    fi: ['sesto', 'rifredi', 'Catania'],
    pi: ['orciano', 'capo d orlando'],
    li:['cecina', 'duo', 'tre']
}








function addSelect(){
    
    let province = document.getElementById('province')
   let value= document.getElementById('select').value;

   let domPro = document.getElementById('selectr');

   if (domPro) {
       domPro.remove();
   }



    let select = document.createElement('select');
    select.id='selectr'
    
    select.classList.add('form-control', 'my-2','py-2')
    province.appendChild(select)




 


  regioni[value].forEach((ele) => {
     let option = document.createElement('option')
     option.textContent=ele
     select.appendChild(option)

  });

 
  selectr.addEventListener("click", function() {

   

    let comremo= document.getElementById('cominix');

    if (comremo) {
        comremo.remove();
    } 

    let comunid= document.getElementById('comunid')

    let comuniselect = document.createElement('select')
    comuniselect.classList.add('form-control','my-2','py-2')
    comuniselect.id='cominix'



    comunid.appendChild(comuniselect);

    let valoreProvincia = selectr.value;
    //console.log(provinceArr[valoreProvincia])

    provinceArr[valoreProvincia].forEach((ele)=>{
        let optionComuni = document.createElement('option')
        optionComuni.textContent=ele
        comuniselect.appendChild(optionComuni)
    })

});   




} 


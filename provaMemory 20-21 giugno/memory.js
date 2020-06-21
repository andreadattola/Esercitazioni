//creare struttura per carde random 
var countTime = 0;
let number= ['uno','due','tre','quattro','cinque','sei','uno','due','tre','quattro','cinque','sei']
//['uno','due','tre','quattro','cinque','sei','uno','due','tre','quattro','cinque','sei']
let card = [1,2,3,4,5,6,7,8,9,10,11,12]
var counter = 0;
var x = []
//console.log(card)
const cards = document.querySelectorAll(".card-img-top");
console.log(cards) 

function shuffle( arr ) {
    var shuffled = arr.sort(function() {
        return Math.random() - 0.5;
    });
    
    return shuffled;
}
var mischia = shuffle(number);
//console.log(mischia)



function assegnaCardNumber(){
    var i= 0;
    cards.forEach((ele)=>{
        ele.classList.add(mischia[i])
        //console.log(ele)
        i++
       
    });
}
assegnaCardNumber()

function trasf(x){
if(x.classList[1] == 'uno'){

    x.src="imgmemory/1.png"

    setTimeout(function(){ 
        x.src='https://cdn3.iconfinder.com/data/icons/hearthstone-deck-back/671/cardBack1.png'
       }, 250);

} else if (x.classList[1]=='due'){

    x.src="imgmemory/2.png"


    setTimeout(function(){ 
        x.src='https://cdn3.iconfinder.com/data/icons/hearthstone-deck-back/671/cardBack1.png'
       }, 250);
} else if (x.classList[1]=='tre'){

    x.src="imgmemory/3.png"

    setTimeout(function(){ 
        x.src='https://cdn3.iconfinder.com/data/icons/hearthstone-deck-back/671/cardBack1.png'
       }, 250);
}else if (x.classList[1]=='quattro'){

    x.src="imgmemory/4.jpeg"

    setTimeout(function(){ 
        x.src='https://cdn3.iconfinder.com/data/icons/hearthstone-deck-back/671/cardBack1.png'
       }, 250);
}else if (x.classList[1]=='cinque'){

    x.src="imgmemory/5.png"
    setTimeout(function(){ 
        x.src='https://cdn3.iconfinder.com/data/icons/hearthstone-deck-back/671/cardBack1.png'
       }, 250);
}else if (x.classList[1]=='sei'){

    x.src="imgmemory/6.png"

    setTimeout(function(){ 
        x.src='https://cdn3.iconfinder.com/data/icons/hearthstone-deck-back/671/cardBack1.png'
       }, 250);
}
    
}
   

    

function flip(){
  
counter++

if (counter !=2 ){
     event.target.id="cliccato";
trasf(event.target)

     x.push(event.target.classList[1])
     console.log(x[0])
 } else {
     
     
            console.log(x[0]+' x event')
            x.push(event.target.classList[1])
            console.log(x[1]+ '  y event!')
            
            if(x[0] == x[1] && event.target.id != 'cliccato' ){
               let cliccato= document.getElementById('cliccato');
               cliccato.id='';
                
                alert('good');
//rimuovo elementi          

            var elements = document.getElementsByClassName(x[0]) 
            for (var element of elements) {
            element.remove();
            // or 
            // element.parentNode.removeChild(element);
            }

            var elements = document.getElementsByClassName(x[1]) 
            for (var element of elements) {
            element.remove();
            // or 
            // element.parentNode.removeChild(element);
            }

            

                 
                counter = 0;
                x.splice(0)

            }else { 
                
                trasf(event.target)
                
                let cliccato= document.getElementById('cliccato');
               cliccato.id='';
                
               //alert('retry')
                
                counter= 0;}
               
                x.splice(0)


                
            }
            
           
            
            
        }


//TIMER ***************+
    var c = 0;
    var t;
    var timer_is_on = 0;

    function timedCount() {
        document.getElementById("time").value = c +' Seconds';
        c = c + 1;
        t = setTimeout(timedCount, 1000);
      }
      
      function startCount() {
        if (!timer_is_on) {
          timer_is_on = 1;
          timedCount();
        }
      }
      
     


function stoptimer() {
    clearTimeout(t);
    timer_is_on = 0;
    alert(document.getElementById("time").value)

  }




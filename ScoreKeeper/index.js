const p1Button = document.querySelector('#p1Button')
const p2Button = document.querySelector('#p2Button')
const resetButton = document.querySelector('#reset')
const winningScoreSelect = document.querySelector("#playto")

// getting the span tags 

const p1Display = document.querySelector('#p1Display')
const p2Display = document.querySelector( '#p2Display')

let p1Score = 0
let p2Score = 0; 
let winningScore = 6
let isGameOver = false; 


p1Button.addEventListener("click", function(){
    if(!isGameOver){
          p1Score +=1;
         if( winningScore ===  p1Score){
            isGameOver  = true

             p1Button.disabled = true
            p2Button.disabled = true
         }
          
    }
    
    p1Display.textContent = p1Score;
})

p2Button.addEventListener("click", function(){
    if(!isGameOver){
          p2Score +=1;
         if( winningScore ===  p2Score){
            isGameOver  = true
            p1Button.disabled = true
            p2Button.disabled = true
         }
          
    }
    
    p2Display.textContent = p2Score;
})

// adding functionality to the reset button. 
resetButton.addEventListener("click", reset)

function reset(){
    p1Score = 0
    p2Score = 0
    isGameOver = false
    p1Display.textContent = 0
    p2Display.textContent = 0 

}



winningScoreSelect.addEventListener('change', function(){
    //alert("CHANGED")
    winningScore = parseInt(this.value);
    reset()
     p1Button.disabled = false
            p2Button.disabled = false
})
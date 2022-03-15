let firstcard = (Math.floor(Math.random()*20)%10+2)
let secondcard = (Math.floor(Math.random()*20)%10+2)
let sum=firstcard + secondcard
let hasBlackJack=false
let message=""
let isalive=true

let mes=document.querySelector("#message-el")

function startgame()
{
   firstcard = (Math.floor(Math.random()*20)%10+2)
   secondcard = (Math.floor(Math.random()*20)%10+2)
   sum=firstcard + secondcard
   document.getElementById("sum-el").textContent="Sum : "+sum
   document.getElementById("card-el").textContent="Cards : "+firstcard+" "+secondcard

   check()
}

let newc;
function newCard()
{
   newc = (Math.floor(Math.random()*20)%10+2)
   sum+=newc
   document.getElementById("sum-el").textContent="Sum : "+sum
   document.getElementById("card-el").textContent+=" "+newc
   check()
}
function check()
{
   if(sum<21)
   {
      message="Do you want to draw a new Card ?"
   }
   else if(sum === 21)
   {
      message="Yeh! YOU've got the BlackJack !"
      hasBlackJack=true
   }
   else
   {
      message="You're out of the game !"
      isalive=false
   }
   mes.textContent=message
}
let c=0
function infomes()
{
   if(c === 0)
   {
      document.querySelector(".rule").textContent=" "+"Rules: 1) if Sum of cards = 21 (You get BlackJack) 2) if Sum of cards < 21 (You get extra chance to choose card) 3) else you loose the game."
      c=1
   }
   else
   {
      document.querySelector(".rule").textContent=""
      c=0
   }
}


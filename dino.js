var character = document.getElementById("charac");
var enemy = document.getElementById("opponent");

function game(){
character.classList.add("animate");

setTimeout(function(){
    character.classList.remove("animate");
},500)
}

setInterval(function(){
   var characpos = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
   var enemypos = parseInt(window.getComputedStyle(enemy).getPropertyValue("left"));

   if(enemypos<50 && enemypos>0 && characpos>=220){
    window.alert("You lost");
    enemy.style.animation = "none"; 
   }
},10)
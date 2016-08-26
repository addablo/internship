document.getElementById("content").addEventListener("mouseover", function (){
  document.getElementById("e-btn").style="opacity: 1 ";
  document.getElementById("m-btn").style="opacity: 1 ";
  document.getElementById("num-btn").style="opacity: 1 ";
});

document.getElementById("content").addEventListener("mouseout", function (){
  document.getElementById("e-btn").style="opacity: 0.3 ";
  document.getElementById("m-btn").style="opacity: 0.3 ";
  document.getElementById("num-btn").style="opacity: 0.3 ";
});

function animateTop(obj, from, to){
   if(from >= to){
       return;
   }
   else {
       var bar = obj;
       bar.style.height = from + "px";
       setTimeout(function(){
           animateTop(obj, from + 1, to);
       }, 25)
   }
}

function animateUp() {
animateTop(document.getElementById('footer-menu'), 0, 50);
}

document.getElementById("edit-btn").addEventListener("click", function (){
    animateUp();
});

function animateBottom(obj, from, to){
   if(from <= to){
       return;
   }
   else {
       var bar = obj;
       bar.style.height = from + "px";
       setTimeout(function(){
           animateBottom(obj, from - 1, to);
       }, 25)
   }
}

function animateBot() {
animateBottom(document.getElementById('footer-menu'), 50, 0);
}

document.getElementById("exit-btn").addEventListener("click", function (){
    animateBot();
});

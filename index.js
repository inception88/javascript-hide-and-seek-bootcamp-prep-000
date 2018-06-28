function getFirstSelector(selector){
  let x = document.querySelector(selector);
  return x;
}

function nestedTarget() {
 let x = document.querySelector('#nested .target');
 return x;
}

function increaseRankBy(n) {
 let x = document.querySelectorAll('.ranked-list');
for (let i = 0; i < x.length; i++) {
  x[i].innerHTML = (i + n).toString();
}
}

function deepestChild() {
 let x = ('#grand-node');
 var z = 1;
 var y;
  while (1) {
   y=document.querySelector('x');
  (x = x+' div');
 z = document.querySelector('x');
 if (z!==null){
   return y;
 }
  }
  }

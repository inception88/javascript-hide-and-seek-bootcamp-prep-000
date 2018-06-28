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
 var x = ('#grand-node');
  while (z!==null) {
  var y=document.querySelector(x);
  (x = x+' div');
var z = document.querySelector(x);
 if (z===null){
  return x;
 }
  }
  }

function toggle(id){
  let x=document.getElementById(id);
  x.style.display=(x.style.display==='block')?'none':'block';
}

let i=0;
function showSlide(n){
  let slides=document.getElementsByClassName("slide");
  if(!slides.length)return;
  if(n>=slides.length)i=0;
  if(n<0)i=slides.length-1;
  for(let j=0;j<slides.length;j++)slides[j].style.display="none";
  slides[i].style.display="block";
}
function next(){i++;showSlide(i);}
function prev(){i--;showSlide(i);}
setInterval(()=>{i++;showSlide(i);},3000);
window.onload=()=>showSlide(i);
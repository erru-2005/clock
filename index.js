

setInterval(()=>{
let d=new Date();
let h=d.getHours();
let m=d.getMinutes();
let s=d.getSeconds();


let hr=30*h+m/2;
let mr=6*m;
let sr=6*s;

hour.style.transform=`rotate( ${hr}deg)`;
min.style.transform=`rotate( ${mr}deg)`;
sec.style.transform=`rotate( ${sr}deg)`;
},1000);
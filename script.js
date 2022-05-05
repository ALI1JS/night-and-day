let start=document.getElementById("start");
let moon =document.getElementById("moon");
let mountains1=document.getElementById("mountains1");
let mountains2=document.getElementById("mountains2");
let river=document.getElementById("river");
let boat=document.getElementById("boat");
let mountains7=document.getElementById("mountains7");
let add=document.querySelector(".nouvil");
window.onscroll=function(){
    let value=scrollY;
    start.style.left=value+"px";
    moon.style.top=value *3+"px";
    mountains1.style.top=value *1.5+"px";
    mountains2.style.top=value +"px";
    boat.style.left=value*2 +"px";
    add.style.fontSize=value*.5+"px";
    river.style.top=value+"px";
    boat.style.top=value+"px";
    if(scrollY>=128){
        add.style.fontSize=133+"px";
        add.style.postion="fixed";
        
    }
    if(scrollY>=159){
        document.querySelector(".main").style.background="linear-gradient(#345,#658)";
    }
   
}
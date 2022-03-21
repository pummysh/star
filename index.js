let spans=document.getElementsByTagName("span");
console.log(spans);
let flag=false;
let index;

let obj={
    a:1,
    b:2,
    c:3,
    d:4,
    e:5,
}

function color(e){
    
    index = obj[e.target.className.split(" ")[0]];
    for(let i = 0; i < index; i++){
        spans[i].style.color ="orange";
    }
}

function changeColor(e){
   
    if(flag===false){
        for(let i = 0; i < spans.length; i++){
            spans[i].style.color="black";
        }
    }
}

function set(e){
    console.log(e)
    flag=true
    for(let i=0;i< index;i++){
        spans[i].style.color ="orange";
    }
    document.getElementById("star").innerHTML=index+" stars"
}
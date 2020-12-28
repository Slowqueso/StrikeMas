
var div2=document.getElementById("content-Z");
var div3=document.getElementById("content-Hallow");
var div4=document.getElementById("content-king");
var div1=document.getElementById("content-daw");
var btn1=document.getElementById("daw-btn");
var btn2=document.getElementById("Z-btn");
var btn3=document.getElementById("Hallow-btn");
var btn4=document.getElementById("king-btn");

//External Conditions
function checkBtn(div){
    if(div.style.display=='block'){
        btn1.style.backgroundColor='rgba(255, 255, 255, 0.452)';
    }else{
        btn1.style.backgroundColor=''
    }
}
//Calling Functions
function displayOnlyDaw(){
    div1.style.display='block';
    if(div1.style.display=='block'){
        btn1.style.backgroundColor='rgba(255, 255, 255, 0.452)';
        btn2.style.backgroundColor='rgba(255, 255, 255, 0)';
        btn3.style.backgroundColor='rgba(255, 255, 255, 0)';
        btn4.style.backgroundColor='rgba(255, 255, 255, 0)';
    }else{
        btn1.style.backgroundColor='rgba(255,255,255,0)';
    }
    div2.style.display='none';
    div3.style.display='none';
    div4.style.display='none';
}
function displayOnlyZ(){
    div2.style.display='block';
    if(div2.style.display=='block'){
        btn2.style.backgroundColor='rgba(255, 255, 255, 0.452)';
        btn3.style.backgroundColor='rgba(255, 255, 255, 0)';
        btn4.style.backgroundColor='rgba(255, 255, 255, 0)';
        btn1.style.backgroundColor='rgba(255, 255, 255, 0)';
    }else{
        btn2.style.backgroundColor='rgba(255, 255, 255, 0)';
    }
    div1.style.display='none';
    div3.style.display='none';
    div4.style.display='none';
}
function displayOnlyHallow(){
    div3.style.display='block';
    if(div3.style.display=='block'){
        btn3.style.backgroundColor='rgba(255, 255, 255, 0.452)';
        btn4.style.backgroundColor='rgba(255, 255, 255, 0)';
        btn1.style.backgroundColor='rgba(255, 255, 255, 0)';
        btn2.style.backgroundColor='rgba(255, 255, 255, 0)';
    }else{
        btn3.style.backgroundColor='rgba(255, 255, 255, 0)';
    }
    div1.style.display='none';
    div2.style.display='none';
    div4.style.display='none';
}
function displayOnlyKing(){
    div4.style.display='block';
    if(div4.style.display=='block'){
        btn4.style.backgroundColor='rgba(255, 255, 255, 0.452)';
        btn1.style.backgroundColor='rgba(255, 255, 255, 0)';
        btn2.style.backgroundColor='rgba(255, 255, 255, 0)';
        btn3.style.backgroundColor='rgba(255, 255, 255, 0)';
    }else{
        btn4.style.backgroundColor='rgba(255, 255, 255, 0)';
    }
    div1.style.display='none';
    div2.style.display='none';
    div3.style.display='none';
}
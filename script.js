let displayxyz = document.getElementById("display");
let buttonsxyz = document.getElementsByClassName("btn");

console.log(buttonsxyz);
function isOpxyz(opxyz){
    if(opxyz==="+" || opxyz==="-" || opxyz==="/" || opxyz==="*"){
        return true;
    }
    return false;
}

function clickingxyz(clickedxyz){
    if(displayxyz.innerText==""){
        if(clickedxyz!='0'){
            displayxyz.innerHTML += clickedxyz;
        }
    }
    else{
        if(isOpxyz(clickedxyz) && isOpxyz(displayxyz.innerText[displayxyz.innerText.length-1])){
            displayxyz.innerText = displayxyz.innerText.slice(0,-1);
        }
        displayxyz.innerText+=clickedxyz;
    }
}

function negate(){
    var flag = false;
    var i=0;
    for(i=0;i<displayxyz.length;i++){
        if(isOpxyz(displayxyz[i])){
            flag=true;
            break;
        }
    }
    if(flag){
        var neg = displayxyz.innerText.slice(i+1);
        displayxyz.innerText = displayxyz.innerText.slice(0,i+1)+"-"+neg;

    }else{
        displayxyz.innerText = "-"+displayxyz.innerText;
    }
}

function evalxyz(){
    try{
        displayxyz.innerText = eval(displayxyz.innerText);
    }
    catch(e){
        displayxyz.innerText = "Error";
    }
}
function clearxyz(){
    displayxyz.innerText="";
}

function backxyz(){
    displayxyz.innerText = displayxyz.innerText.slice(0,-1);
}
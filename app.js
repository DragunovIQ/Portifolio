var tri = document.getElementById('triangle');
var blck = document.getElementsByClassName('blck');
var txt = document.getElementsByClassName('txt');
var shadow1 = document.getElementById('shadow1');
var shadow2 = document.getElementById('shadow2');
var square2 = document.getElementById('square2');
var circle = document.getElementById('circle');

// --------------- Day and night mode -------------
function nighty(){
    // Backgrounds
    for(let x = 0; x < blck.length; x++){
        blck[x].style.background = 'black';
        blck[x].style.transition = '0.5s ease';
    }
    tri.style.borderRight = '85px black solid';
    tri.style.borderLeft = '85px black solid';
    circle.style.boxShadow = '0px 0px 54px 0px rgba(247,255,0,1)';
    square2.style.boxShadow = '0px 0px 94px 0px rgba(131,28,227,1)';
    shadow1.style.textShadow = '0px 0px 15px #fbfbfb';
    shadow1.style.color = 'white';
    shadow2.style.textShadow = '0px 0px 15px #fbfbfb';
    shadow2.style.color = 'white';
    // texts
    for(let y = 0; y < txt.length; y++){
        txt[y].style.color = '#fbfbfb';
    }
}
//Night mode
function lighty(){
    for(let x = 0; x < blck.length; x++){
        blck[x].style.background = '#fbfbfb';
    }
    tri.style.borderRight = '85px #fbfbfb solid';
    tri.style.borderLeft = '85px #fbfbfb solid';
    circle.style.boxShadow = '0px 0px 25px -6px rgba(0,0,0,0.25)';
    square2.style.boxShadow = '0px 0px 27px -6px rgba(0,0,0,0.75)';
    shadow1.style.color = 'black';
    shadow2.style.color = 'black';
    for(let y = 0; y < txt.length; y++){
        txt[y].style.color = 'black';
    }
}

//----------    buttons shadow -------------
btn1 = document.getElementById('btn1');
btn2 = document.getElementById('btn2');
btn3 = document.getElementById('btn3');
btn4 = document.getElementById('btn4');

btn1.addEventListener('mouseover', ()=> {
    btn1.style.boxShadow = '0px 0px 12px -5px rgba(0,0,0,0.75)';
});
btn1.addEventListener('mouseout', ()=>{
    btn1.style.boxShadow = 'none';
});
btn2.addEventListener('mouseover', ()=>{
    btn2.style.boxShadow = '0px 0px 12px -5px rgba(0,0,0,0.75)';
})
btn2.addEventListener('mouseout', ()=>{
    btn2.style.boxShadow = 'none';
});
btn3.addEventListener('mouseover', ()=>{
    btn3.style.boxShadow = '0px 0px 12px -5px rgba(0,0,0,0.75)';
})
btn3.addEventListener('mouseout', ()=>{
    btn3.style.boxShadow = 'none';
});
btn4.addEventListener('mouseover', ()=>{
    btn4.style.boxShadow = '0px 0px 12px -5px rgba(0,0,0,0.75)';
})
btn4.addEventListener('mouseout', ()=>{
    btn4.style.boxShadow = 'none';
});

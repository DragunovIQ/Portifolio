var intro = document.getElementById('intro');
var title = document.getElementById('title');
var contact = document.getElementById('contact');
var body = document.getElementById('body');
var span = document.getElementById('span');
var tri = document.getElementById('triangle');
// --------------- Day and night mode -------------
function night(){
    intro.style.background = 'black';
    body.style.background = 'black';
    title.style.color = '#fbfbfb';
    contact.style.color = '#fbfbfb';
    span.style.background = 'black';
    span.style.color = '#fbfbfb';
    span.style.transition = '0.5s ease';
    tri.style.borderRight = '85px black solid';
    tri.style.borderLeft = '85px black solid';
}
function light(){
    intro.style.background = '#fbfbfb';
    title.style.color = 'black';
    contact.style.color = 'black';
    body.style.background = '#fbfbfb';
    span.style.background = '#fbfbfb';
    span.style.transition = '0.5s ease';
    span.style.color = 'black';
    tri.style.borderRight = '85px #fbfbfb solid';
    tri.style.borderLeft = '85px #fbfbfb solid';
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

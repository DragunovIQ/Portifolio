var intro = document.getElementById('intro');
var title = document.getElementById('title');
var contact = document.getElementById('contact');
var body = document.getElementById('body');
var span = document.getElementById('span');
var tri = document.getElementById('triangle');
function night(){
    intro.style.background = 'black';
    body.style.background = 'black';
    title.style.color = '#fbfbfb';
    contact.style.color = '#fbfbfb';
    span.style.background = 'black';
    span.style.color = '#fbfbfb';
    span.style.transition = '0.5s ease';
    tri.style.borderRight = 'black';
    tri.style.borderLeft = 'black';
}
function light(){
    intro.style.background = '#fbfbfb';
    title.style.color = 'black';
    contact.style.color = 'black';
    body.style.background = '#fbfbfb';
    span.style.background = '#fbfbfb';
    span.style.transition = '0.5s ease';
    span.style.color = 'black';
    tri.style.borderRight = '#fbfbfb';
    tri.style.borderLeft = '#fbfbfb';
}
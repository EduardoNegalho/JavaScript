// aplique a cor do background do body no background dos paragrados

const div = document.querySelector('#div-paragraphs');
const paragraphs = div.querySelectorAll('p');

const bodyStyle = getComputedStyle(document.querySelector('body'));
const backgorundColor = bodyStyle.backgroundColor;

for (const p of paragraphs) {
    p.style.backgroundColor = backgorundColor;
    p.style.color = '#FFF';
    p.style.padding = '10px';
}
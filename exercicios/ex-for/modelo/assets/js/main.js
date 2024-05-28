const elements = [
    {tag: 'p', text: 'Frase 1'},
    {tag: 'div', text: 'Frase 2'},
    {tag: 'section', text: 'Frase 3'},
    {tag: 'footer', text: 'Frase 4'}
]

function createElement(){
    const containter = document.querySelector('.container');
    const div = document.createElement('div');

    for (let i = 0; i < elements.length; i++) {
        const { tag, text } = elements[i]
        
        const element = document.createElement(tag);
        element.textContent = text;

        div.appendChild(element);
    }

    containter.appendChild(div);
}

createElement();
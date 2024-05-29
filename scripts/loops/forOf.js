// usado para percorrer sobre objetos iteraveis, como: arrays e strings

const characters = ['Iron Man', 'Sponje Bob', 'Hunt Man', 'Captain Amarican'];

// iterando sobre os elementos de um array
for (let value of characters) {
    console.log(value);
}

const fullname = 'Eduardo Marques Negalho';

// iterando sobre uma string
for (const char of fullname) {
    console.log(char);
}
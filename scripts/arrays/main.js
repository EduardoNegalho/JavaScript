// array são estruturas de dados, onde pode ser armazenado vários tipos de dados

const arr = ['Bob Esponja', 'Patrick', 'Sandy', 'Lula Molusco', 'Sirigueijo'];
console.log(arr);

// para acessar uma posição basta colocar a posição dentro de um []
console.log(arr[3]); // Lula Molusco

// descobrir o tamanho do array
console.log(arr.length);

// adicionar item ao final do array
arr.push('Plunkton');

// adicionar ao inicio
arr.unshift('Garry');

console.log(arr);

// removendo item do inicio
arr.shift();

// removendo item do fim
arr.pop();

console.log(arr);

// descobrindo o ultimo elemento
console.log(arr.at(-1));

// descobrir o index do primeiro elemento correspondente passado entre ()
console.log(arr.indexOf('Sandy'));

// retorna um boolean se o elemento existir no array
console.log(arr.includes('Eduardo'));

// remove o elemento no index especificado até o ponto de parada
arr.splice(2, 2);

console.log(arr);


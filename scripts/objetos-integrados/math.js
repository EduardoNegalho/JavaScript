let num1 = 9.50;

console.log(Math.floor(num1)); // arredonda o número para baixo
console.log(Math.ceil(num1)); // arredonda o num para cima
console.log(Math.round(num1)); // arredonda o num para o número mais próximo seja pra cima ou para baixo

const max = [1, 2, 3, 4, 5, 10000, 20425, 5458, 121549, 1004754];

console.log(Math.max(...max)); // retorna o maior número encontrado
console.log(Math.min(...max)); // retorna o menor número encontrado

const random = Math.round(Math.random() * (101 - 50) + 50); // gera um num aleatorio entre 50 e 100

console.log(Math.pow(8, 2)); // retorna o valor de x elevado à potência de y
console.log(Math.sqrt(64)); // retorna a raiz quadrada 
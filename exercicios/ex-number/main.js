const numTitle = document.querySelector('#num-title');
const text = document.querySelector('#text');

const num = Number(prompt('Digite um número:'));

// document.body.innerHTML = `<h3>Seu número é: ${num}</h3>`;
// document.body.innerHTML += `Raiz quadrada: ${Math.sqrt(num)}<br>`;
// document.body.innerHTML += `${num} é inteiro: ${Number.isInteger(num)}<br>`;
// document.body.innerHTML += `É NaN: ${Number.isNaN(num)}<br>`;
// document.body.innerHTML += `${num} arredondado para baixo: ${Math.floor(num)}<br>`;
// document.body.innerHTML += `${num} arredondado para cima: ${Math.ceil(num)}<br>`;
// document.body.innerHTML += `${num} com duas casas decimais: ${num.toFixed(2)}<br>`;

numTitle.innerHTML = num ;

text.innerHTML = `
<p>Raiz quadrada: ${Math.sqrt(num)}</p>
<p>${num} é inteiro: ${Number.isInteger(num)}</p>
<p>É NaN: ${Number.isNaN(num)}</p>
<p>${num} arredondado para baixo: ${Math.floor(num)}</p>
<p>${num} arredondado para cima: ${Math.ceil(num)}</p>
<p>${num} com duas casas decimais: ${num.toFixed(2)}</p>`;
const name = prompt('Digite seu nome completo:');

document.body.innerHTML = `Seu nome é: ${name} <br>`;
document.body.innerHTML += `Seu nome tem ${name.length} letras<br>`;
document.body.innerHTML += `A segunda letra do seu nome é: ${name[1]}<br>`;
document.body.innerHTML += `Qual o primeiro índice da letra 'a' no seu nome: ${name.indexOf('a')}<br>`;
document.body.innerHTML += `Qual o último índice da letra 'a' no seu nome: ${name.lastIndexOf('a')}<br>`;
document.body.innerHTML += `As últimas 3 letras do seu nome são: ${name.slice(-3)}<br>`;
document.body.innerHTML += `As palavras do seu nome são: ${name.split(' ').join(', ')}<br>`;
document.body.innerHTML += `Seu nome em letras maiúsculas: ${name.toUpperCase()}<br>`;
document.body.innerHTML += `Seu nome em letras minúsculas: ${name.toLowerCase()}<br>`;
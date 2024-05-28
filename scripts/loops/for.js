// variavel de controle; condicao; incrementar / decrementar

for (let i = 1; i <= 20; i++) {
    if (i % 2 === 0) {
        console.log(`${i} é par`);
    } else {
        console.log(`${i} é ímpar`);
    }
}

const names = ['Eduardo', 'Ester', 'Lucas', 'João', 'Pedro', 'Maria'];

for (let i = 0; i < names.length; i++) {
    console.log(`Índice: ${i} - Valor: ${names[i]}`);
}
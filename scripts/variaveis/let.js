// armazena um valor na memória
// LET é a declaração mais recomendada para uso nas variáveis mutáveis
// Pode ser reatribuida mas não redeclarada

/*
Não pode criar variáveis com palavras reservadas
Variáveis precisam ter nomes significativos
Não pode começar no de variáveis com números
Não pode conter empaços ou traços(-)
camelCase = nomeCompleto
*/

let name = 'Isaias';

console.log(`${name} nasceu em 1970.`);
console.log(`Em 1985 ${name} conheceu Claudia`);
console.log(`${name}, casou-se com Claudia em 1993`);
console.log(`Claudia teve 1 filho com ${name} em 2003`);
console.log(`O filho de ${name} se chama Eduardo`);

// alterando o valor da variável
name = 'Eduardo';
console.log(name); // Eduardo
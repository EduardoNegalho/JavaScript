// Escreva um algoritmo que:

// Solicite ao usuário que informe a sua idade. > 18
// Solicite ao usuário que informe se possui um convite válido (Sim/Não).
// Solicite ao usuário que informe se está vestido formalmente (Sim/Não).
// Verifique todas as condições acima.
// Exiba uma mensagem informando se a entrada da pessoa foi permitida ou negada com base nas condições verificadas.
// Desafio Adicional:

// Se a pessoa for VIP (indicado por uma resposta afirmativa a uma pergunta adicional), permita a entrada independentemente das outras condições.

const clientAge = 20;
const haveInvitation = true;
const dressCode = true;
const clientIsVip = true;

if (clientIsVip) {
    console.log('Acesso ao estabelecimento permitido, sem restrições!');
}else if (clientAge >= 18 && haveInvitation && dressCode) {
    console.log('Acesso permitido ao estabelecimento!');
} else {
    console.log('Acesso ao estabelecimento negado!');
}
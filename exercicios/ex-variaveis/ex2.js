// varA == varB
// varB == varC
// varC == varA

let varA = 'A';
let varB = 'B';
let varC = 'C';

const aux = varA;

varA = varB;
varB = varC;
varC = aux;

// Solução simplificada
// [varA, varB, varC] = [varB, varC, varA];

console.log(varA, varB, varC);
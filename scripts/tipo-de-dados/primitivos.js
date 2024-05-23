const name = 'Eduardo';
console.log(`A variável name é do tipo: ${typeof(name)}`);

const age = 10;
console.log(`A variável age é do tipo : ${typeof(age)}`);

const price = 9.99;
console.log(`A variável price é do tipo : ${typeof(price)}`);

let studentName; // undefined -> não aponta para nenhum local na memória
console.log(`A variável studentName é do tipo : ${typeof(studentName)}`);

let points = null; // nul -> não aponta para nenhum local na memória
console.log(`A variável points é do tipo : ${typeof(points)}`); // object

const boolean = 10 > 5; // true
console.log(`A variável boolean é do tipo : ${typeof(boolean)}`);

// funções são blocos de códigos que são executados apenas quando chamados

// funções nomeadas

function sum(a, b) {
    console.log(a + b);
};

sum(17, 8); // chamada da função sum()

// função anônima

const sayHello = function (name) {
    console.log('Hello ' + name);
};

sayHello('Eduardo');

// arrow function

const randomNumber = () => Math.round(Math.random() * 100);

console.log(randomNumber())

// função construtura

function People(fullname, age, cpf) {
    // 'this' permite atribuir os parametros as propriedades do objeto
    this.fullname = fullname;
    this.age = age;
    this.cpf = cpf;
};

const client1 = new People('Eduardo Marques Negalho', 20, 12345678910); // criando uma nova pessoa com função construtura, diferencial na hora de usar é a palavra 'new'
console.log(client1);

// funções geradoras
function* goodMorning() {
    yield ("Hello");
    yield ("Good Morning");
    yield ("Eduardo");
};

const i = goodMorning(); // esta variável será um objeto do tipo generator/iterator
// next() passa para a próxima iteração da função no caso para o próximo yield
console.log(i.next().value); // Hello
console.log(i.next().value); // Good Morning
console.log(i.next().value); // Eduardo
console.log(i.next().value); // Undefined
// Usado para percorrer sobre indices e chaves

const people = {
    name: 'Eduardo',
    middleName: 'Marques',
    age: 20
}

// acessando apenas as chaves
for (let key in people) {
    console.log(key);
}

console.log("#####");

// acessando as chaves e obtendo o valor
for (let key in people) {
    console.log(`${key}: ${people[key]}`);
}

console.log("#####");

const numbers = [1000, 2000, 3000, 4000, 5000];

// percorrendo sobre os indices do array
for (let i in numbers) {
    console.log(i);
}

console.log("#####");

// percorrendo sobre os indices do array e acessando os valores
for (let i in numbers) {
    console.log(numbers[i]);
}
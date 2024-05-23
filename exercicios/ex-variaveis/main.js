const fullname = "Eduardo Marques Negalho";
const age = 21;
const weigth = 73.5;
const heigthInMeters = 1.84;
const IMC = weigth / Math.pow(heigthInMeters, 2);
const birthYear = 2024 - age;

console.log(`${fullname} tem ${age} anos, pesa ${weigth}kg, tem ${heigthInMeters}m de altura e seu IMC é de ${IMC.toFixed(2)}, ${fullname} nasceu em ${birthYear}`);
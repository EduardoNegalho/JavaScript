// o if ternario é uma abreviação para o uso do if e else,

let points = 999;

const clientLevel = points >= 1000 ? "Cliente Vip" : "Cliente Normal";

console.log(clientLevel);

// exemplo dois

const salary = 1000;

const bonus = salary * (salary > 1000 ? 0.10 : 0.15);

console.log(bonus);

// exemplo três

const userColor = null;

const defaultColor = userColor ? userColor : "Preto";

console.log(defaultColor);
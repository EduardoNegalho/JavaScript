const car = {
    type: 'Fiat',
    model: '500',
    color: 'white',
    radio(){
        return 'Radio FM';
    }
}

// como acessar as propriedades
console.log(car.type);
console.log(car["model"])

// objetos podem ter métodos, métodos são funções inseridas no obj
car.start = function () {
    return 'Vruuum'
}
console.log(car.start()); // acessando o método do objeto car

// também pode usar o 'this' para referênciar uma propriedade do obj
car.infoCar = function () {
    return `Informações do veículo: \nTipo: ${this.type} - Modelo: ${this.model} - Cor: ${this.color}`
}
console.log(car.infoCar());

// deletar uma prop do obj
delete car.color;

console.log(car); // exibindo o obj por completo

// desestruturando um obj
const { type, model } = car;
console.log(type);
console.log(model);

const myScope = () => {
    const form = document.querySelector('#form');
    const result = document.querySelector('#result');

    const peoples = [];

    form.addEventListener('submit', (evt) => {
        evt.preventDefault();

        const name = form.querySelector('.name');
        const surname = form.querySelector('.surname');
        const weight = form.querySelector('.weight');
        const height = form.querySelector('.height');

        const people = {name: name.value, surname: surname.value, weight: weight.value, height: height.value}
        peoples.push(people);

        result.innerHTML += `<p>Nome Completo: ${name.value} ${surname.value} - Peso: ${weight.value} - Altura: ${height.value}</p>`
    })
}

myScope()
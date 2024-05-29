// do while -> executa a primeira vez independente se for true o false
// porém nas próximas iteração executa apenas se a condição for true

function numRandom(min, max) {
    const r = Math.random() * (max - min) + min;
    return Math.floor(r);
}

function random() {
    const min = 1;
    const max = 50;

    let count = 0;
    let rand = 10;

    do {
        // rand = numRandom(min, max)
        console.log(rand);
        count++;

    } while (rand !== 10);

    console.log(`\nForam necessárias ${count} repetições para sortear o número 10!`);
}
random();
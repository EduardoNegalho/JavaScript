// while -> apenas executa o loop se a condição for verdadeira

function numRandom(min, max) {
    const r = Math.random() * (max - min) + min;
    return Math.floor(r);
}

function random() {
    const min = 1;
    const max = 50;

    let count = 0;
    let rand = numRandom(min, max);

    while (rand !== 10) {
        rand = numRandom(min, max)
        console.log(rand);
        count++;
    }

    console.log(`\nForam necessárias ${count} repetições para sortear o número 10!`);
}
random();

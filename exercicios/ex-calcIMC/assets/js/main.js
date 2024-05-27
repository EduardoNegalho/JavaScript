function main() {
    const form = document.querySelector('#form');

    const calculateBMI = (weight, height) => {
        const bmi = weight / Math.pow(height, 2);

        if (bmi < 18.5) {
            return `Seu IMC é ${bmi.toFixed(2)} (Abaixo do peso)`;
        } else if (bmi <= 24.9) {
            return `Seu IMC é ${bmi.toFixed(2)} (Peso normal)`;
        } else if (bmi <= 29.9) {
            return `Seu IMC é ${bmi.toFixed(2)} (Sobrepeso)`;
        } else if (bmi <= 34.9) {
            return `Seu IMC é ${bmi.toFixed(2)} (Obesidade grau 1)`;
        } else if (bmi <= 39.9) {
            return `Seu IMC é ${bmi.toFixed(2)} (Obesidade grau 2)`;
        } else {
            return `Seu IMC é ${bmi.toFixed(2)} (Obesidade grau 3)`;
        }
    }


    form.addEventListener('submit', (evt) => {
        evt.preventDefault();

        const weight = form.querySelector('#weight').value;
        const height = form.querySelector('#height').value;

        const result = calculateBMI(weight, height);

        const showResult = () => {
            const divResult = document.querySelector('#result');

            divResult.textContent = result;
        }

        showResult();
    })


}

main()
function main() {
    const form = document.querySelector('#form');

    const calculateBMI = (weight, height) => {
        const bmi = weight / Math.pow(height, 2);

        if (bmi < 18.5) return `Seu IMC é ${bmi.toFixed(2)} (Abaixo do peso)`;

        if (bmi <= 24.9)  return `Seu IMC é ${bmi.toFixed(2)} (Peso normal)`;

        if (bmi <= 29.9) return `Seu IMC é ${bmi.toFixed(2)} (Sobrepeso)`;

        if (bmi <= 34.9) return `Seu IMC é ${bmi.toFixed(2)} (Obesidade grau 1)`;

        if (bmi <= 39.9) return `Seu IMC é ${bmi.toFixed(2)} (Obesidade grau 2)`;

        if (bmi >= 40) return `Seu IMC é ${bmi.toFixed(2)} (Obesidade grau 3)`;
    }

    const showResult = (msg, isValid) => {
        const divResult = document.querySelector('#result');
        divResult.innerHTML = "";

        const className = isValid === true ? 'paragraph-result-true' : 'paragraph-result-false';

        const p = document.createElement('p');
        p.classList.add(className);
        p.innerHTML = msg;
        divResult.appendChild(p);
    }

    form.addEventListener('submit', (evt) => {
        evt.preventDefault();

        const inputWeight = evt.target.querySelector('#weight');
        const inputHeight = evt.target.querySelector('#height');

        const weight = Number(inputWeight.value);
        const height = Number(inputHeight.value);

        if (!weight) {
            showResult("Peso Inválido", false);
            return
        }

        if (!height) {
            showResult("Altura Inválida", false);
            return
        }

        const bmi = calculateBMI(weight, height);
        showResult(bmi, true);
    })
}

main()
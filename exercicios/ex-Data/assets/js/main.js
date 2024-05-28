// function main() {
//     const h1 = document.querySelector('.container h1');
//     const today = new Date();

//     function getDayOfWeek(day) {
//         switch (day) {
//             case 0:
//                 return 'Domingo';
//             case 1:
//                 return 'Segunda-Feira';
//             case 2:
//                 return 'Terça-Feira';
//             case 3:
//                 return 'Quarta-Feira';
//             case 4:
//                 return 'Quinta-Feira';
//             case 5:
//                 return 'Sexta-Feira';
//             case 6:
//                 return 'Sábado';
//             default:
//                 return "Valor Inválido";
//         }
//     }

//     function getMonthOfDate(month) {
//         const monthsNames = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];

//         return monthsNames[month];
//     }

//     function zeroToLeft(num) {
//         return num >= 10 ? `${num}` : `0${num}`;
//     }

//     function createDate(date) {
//         const day = date.getDay();
//         const month = date.getMonth();

//         const nameDay = getDayOfWeek(day);
//         const nameMonth = getMonthOfDate(month);

//         return `${nameDay}, ${date.getDate()} de ${nameMonth} de ${date.getFullYear()} às ${zeroToLeft(date.getHours())}:${zeroToLeft(date.getMinutes())}`
//     }

//     return h1.textContent = createDate(today);
// }
// main();

const h1 = document.querySelector('.container h1');
const date = new Date();

h1.textContent = date.toLocaleString('pt-BR', {dateStyle: "full", timeStyle: "short"})
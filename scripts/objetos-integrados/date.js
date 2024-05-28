const birthday = new Date();

function formatedDate(date) {
    const day = zeroToLeft(date.getDate());
    const month = zeroToLeft(date.getMonth() + 1);
    const year = zeroToLeft(date.getFullYear());
    const hours = zeroToLeft(date.getHours());
    const minutes = zeroToLeft(date.getMinutes());
    const seconds = zeroToLeft(date.getSeconds());
    
    console.log(`${day}/${month}/${year}  ${hours}:${minutes}:${seconds}`);
}

function zeroToLeft(num) {
    return num >= 10 ? `${num}` : `0${num}`;
}

formatedDate(birthday);
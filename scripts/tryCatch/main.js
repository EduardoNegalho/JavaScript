// Try: bloco a ser executado
// Catch: bloco a ser executado caso encontre um error no TRY
// Finally: bloco sempre executado independende se ocorreu erro ou não no TRY

function returnHour(date) {
    if (date && !(date instanceof Date)) {
        throw new TypeError('Esperando uma instância de Date.');
    }

    if (!date) {
        date = new Date()
    }

    return date.toLocaleTimeString('pt-BR', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
    })
}

try {
    // const date = new Date('2003-10-17 18:50:45')
    const hour = returnHour(11);
    console.log(hour)
} catch (error) {
    // Esperando um erro para ser tratado
    console.log('Ocorreu um problema: ' + error)
} finally {
    console.log('Tenha um bom dia!')
}

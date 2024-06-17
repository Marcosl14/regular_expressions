// contiene

const regEx = /ar/;
const examples = ['aaso', 'aesa', 'qwer', 'arsa', 'barsa', 'arsac', 'barsac']; // aca hay algo raro, porque deberian cumplir barsa, arsac y barsac
examples.forEach(element => {
    const result = regEx.test(element);
    console.log(`El valor ${element} ${result ? 'CUMPLE' : 'NO CUMPLE'} con la expresion regular ${regEx}`);
});

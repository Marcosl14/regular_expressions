// ^ inicio de linea

const regEx = new RegExp('^a');
const examples = ['aaso', 'aesa', 'qwer', 'arsa'];
examples.forEach(element => {
    const result = regEx.test(element);
    console.log(`El valor ${element} ${result ? 'CUMPLE' : 'NO CUMPLE'} con la expresion regular ${regEx}`);
});

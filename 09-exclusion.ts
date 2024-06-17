// [^] exclusion

const regEx = /a[^aei]s[ao]/;
const examples = ['aaso', 'aesa', 'qwer', 'arsa'];

examples.forEach(element => {
    const result = regEx.test(element);
    console.log(`El valor ${element} ${result ? 'CUMPLE' : 'NO CUMPLE'} con la expresion regular ${regEx}`);
});

// \.$ que termina con un punto

const regEx = new RegExp('\\.$'); // es necesario escapar la \ adelantando una\
const examples = ['.aso', 'aesa', 'qwer.', 'arsa'];
examples.forEach(element => {
    const result = regEx.test(element);
    console.log(`El valor ${element} ${result ? 'CUMPLE' : 'NO CUMPLE'} con la expresion regular ${regEx}`);
});

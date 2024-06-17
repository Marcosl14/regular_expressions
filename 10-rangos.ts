// [a-z] - -> rango

const regEx = /a[a-m]s[0-5]/;
const examples = ['aaso', 'aes2', 'qwer', 'ams9'];

examples.forEach(element => {
    const result = regEx.test(element);
    console.log(`El valor ${element} ${result ? 'CUMPLE' : 'NO CUMPLE'} con la expresion regular ${regEx}`);
});

console.log("------------------------------------------")

// tambien se puede mezclar, por ejemplo: [0-5rmn] del 0 al 5 y las lentras rmn
// o incluso [0-5a-zAXY] -> del 0 al 5, de la a a la z minusculas y las mayusculas AXY
const regEx2 = /a[a-m]s[0-5a-zAXY]/;
const examples2 = ['aaso', 'aes2', 'amsr', 'ams9', 'amsA', 'amsB'];

examples2.forEach(element => {
    const result = regEx2.test(element);
    console.log(`El valor ${element} ${result ? 'CUMPLE' : 'NO CUMPLE'} con la expresion regular ${regEx2}`);
});

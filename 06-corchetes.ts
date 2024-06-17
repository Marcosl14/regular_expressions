// [] corchetes en esa posicion, por ejemplo a[aei]s[ao] significa: primero obligatoriamente una a, luego una a, e o una i, luego obligatoriamente una s, luego una a o una o

const regEx = /a[aei]s[ao]/;
const examples = ['aaso', 'aesa', 'qwer', 'arsa', 'barsa', 'arsac', 'barsac'];

// aca hay algo raro, porque deberian cumplir barsa, arsac y barsac
// es como si la expresion fuera /^a[aei]s[ao]$/

examples.forEach(element => {
    const result = regEx.test(element);
    console.log(`El valor ${element} ${result ? 'CUMPLE' : 'NO CUMPLE'} con la expresion regular ${regEx}`);
});

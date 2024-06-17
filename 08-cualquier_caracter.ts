// . -> cualquier caracter

const regEx = /a.s./;
const examples = ['aaso', 'aesa', 'qwer', 'arwa'];
examples.forEach((element) => {
  const result = regEx.test(element);
  console.log(
    `El valor ${element} ${
      result ? 'CUMPLE' : 'NO CUMPLE'
    } con la expresion regular ${regEx}`
  );
});

console.log("----------------------------")

// por ejemplo, se podria hacer tambien
const regEx2 = /2.$/; // todos los terminados en veintis (el punto es "cualquier caracter")
const examples2 = ['10;23', '10;25', '10;34', '10;18'];
examples2.forEach((element) => {
  const result = regEx2.test(element);
  console.log(
    `El valor ${element} ${
      result ? 'CUMPLE' : 'NO CUMPLE'
    } con la expresion regular ${regEx2}`
  );
});

console.log("----------------------------")

// por ejemplo, se podria hacer tambien
const regEx3 = /[23].$/; // todos los terminados en veintis y treintas (el punto es "cualquier caracter")
const examples3 = ['10;23', '10;25', '10;34', '10;18'];
examples3.forEach((element) => {
  const result = regEx3.test(element);
  console.log(
    `El valor ${element} ${
      result ? 'CUMPLE' : 'NO CUMPLE'
    } con la expresion regular ${regEx3}`
  );
});

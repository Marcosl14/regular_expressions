function testRegEx(regEx: RegExp) {
  ['aaaa', 'aes2', 'amsr', 'ama9', 'rmns', 'amaa', '', 'ghgaaa', 'jatyabja', 'r'].forEach((element) => {
    const result = regEx.test(element);
    console.log(
      `El valor ${element} ${
        result ? 'CUMPLE' : 'NO CUMPLE'
      } con la expresion regular ${regEx}`
    );
  });
  console.log("--------------------------")
}

testRegEx(/a*/); // Asterisco (*). Significa "cero o más veces". Ejemplo: `a*` coincide con "", "a", "aa", "aaa", etc. -> deja pasar todo. si tiene, o no tiene
testRegEx(/a+/); // Mas (+). Significa "una o más veces". Ejemplo: `a+` coincide con "a", "aa", "aaa", etc.
testRegEx(/a?/); // Signo de interrogación (?). Significa "cero o una vez". Ejemplo: `a?` coincide con "" o "a". -> deja pasar todo. si tiene, o no tiene

testRegEx(/a{3}/); // Llaves ({n}). Especifica un número exacto de repeticiones concecutivas. Ejemplo: `a{3}` coincide con "aaa".
testRegEx(/a{2,3}/); // Llaves con rango ({n,m}). Especifica un rango de repeticiones concecutivas. Ejemplo: `a{2,4}` coincide con "aa", "aaa" o "aaaa".
testRegEx(/a{2,}/); // Llaves con mínimo ({n,}). Especifica un número mínimo de repeticiones concecutivas. Ejemplo: `a{2,}` coincide con "aa", "aaa", "aaaa", etc.

testRegEx(/(ae)+/); // en grupos
testRegEx(/a?e/); // una a delante de una e?

// * y ? parecen no tener un uso practico, pero si lo tienen, por ejemplo:
const str = "baaaac";
const result = str.replace(/a*/g, '');
console.log(result); // "bc"
console.log("--------------------------")

const pattern1 = /a*b/;
console.log(pattern1.test("b"));    // true
console.log(pattern1.test("ab"));   // true
console.log(pattern1.test("aaab")); // true
console.log(pattern1.test("c"));    // false
console.log("--------------------------")

const pattern2 = /a?b/;
console.log(pattern2.test("b"));  // true
console.log(pattern2.test("ab")); // true
console.log(pattern2.test("aab"));// false
console.log("--------------------------")

const postalCodePattern = /\d{5}-?\d{4}/;
console.log(postalCodePattern.test("12345-6789")); // true
console.log(postalCodePattern.test("123456789"));  // true
console.log("--------------------------")

const text = "This is an example text.";
const cleanedText = text.replace(/a*/g, '');
console.log(cleanedText); // "This is n exmple text."
console.log("--------------------------")

testRegEx(/^[a-p]{4}$/); // solo letras de la a a la p, 4 caracteres de largo

function testRegEx(regEx: RegExp) {
  ['aaaa', 'aes2', 'amsr', 'ama9', 'rmns', 'emaa', 'emar', 'aeae','', ',', ' '].forEach((element) => {
    const result = regEx.test(element);
    console.log(
      `El valor ${element} ${
        result ? 'CUMPLE' : 'NO CUMPLE'
      } con la expresion regular ${regEx}`
    );
  });
  console.log('--------------------------');
}

testRegEx(/^a|^e/); // alternativa o pipe | -> or
testRegEx(/(a[aei]){2}/); // agrupacion () -> aa o ae, o ai dos veces seguidas -> aaaa, aaae, aaai, aeai, etc...

testRegEx(/\w/); // todo caracter alfanumerico inclusive _
testRegEx(/\W/); // todo lo contrario a w (signos de puntuacion, espacios, etc)


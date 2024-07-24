const paragraph =
  'The quick brown fox jumps over the lazy dog. It barked "fox". foxit. belfox';

console.log('busqueda en cadena de texto');
console.log(paragraph.match(/[A-Z]/g));
console.log('---------------------------');

console.log(
  'delimitador de palabra \b al inicio y al final (cuenta fox, "fox")'
);
console.log(paragraph.match(/\bfox\b/g)); //
console.log('---------------------------');

console.log('delimitador de palabra \b al inicio (cuenta fox, "fox", foxit)');
console.log(paragraph.match(/\bfox/g));
console.log('---------------------------');

console.log('delimitador de palabra \b al final (cuenta fox, "fox", belfox)');
console.log(paragraph.match(/fox\b/g));
console.log('---------------------------');

console.log(
  'delimitador de palabra \b -> busca el indice de la primer coincidencia'
);
console.log(paragraph.search(/\bfox\b/));
console.log('---------------------------');

console.log(
  'delimitador de palabra \b -> busca el indice todas las coincidencias (devuelve coincidencia, indice, etc)'
);
const regex = /\bfox\b/g;
let match;
const indices = [];
while ((match = regex.exec(paragraph)) !== null) {
  console.log(match);
}
console.log('---------------------------');

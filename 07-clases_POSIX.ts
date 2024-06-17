/**
1. `[:alnum:]` - Caracteres alfanuméricos (letras y dígitos).
   - Equivalente en JavaScript: `[a-zA-Z0-9]`
   
2. `[:alpha:]` - Letras (mayúsculas y minúsculas).
   - Equivalente en JavaScript: `[a-zA-Z]`

3. `[:ascii:]` - Caracteres ASCII.
   - Equivalente en JavaScript: `[\x00-\x7F]`

4. `[:blank:]` - Espacio o tabulación.
   - Equivalente en JavaScript: `[ \t]`

5. `[:cntrl:]` - Caracteres de control.
   - Equivalente en JavaScript: `[\x00-\x1F\x7F]`

6. `[:digit:]` - Dígitos.
   - Equivalente en JavaScript: `\d` o `[0-9]`

7. `[:graph:]` - Caracteres visibles (no espacio).
   - Equivalente en JavaScript: `[^\x00-\x20\x7F]`

8. `[:lower:]` - Letras minúsculas.
   - Equivalente en JavaScript: `[a-z]`

9. `[:print:]` - Caracteres imprimibles (incluye espacio).
   - Equivalente en JavaScript: `[ -~]`

10. `[:punct:]` - Signos de puntuación.
    - Equivalente en JavaScript: `[!"#$%&'()*+,\-./:;<=>?@[\\\]^_`{|}~]`

11. `[:space:]` - Caracteres de espacio en blanco.
    - Equivalente en JavaScript: `\s` o `[ \t\r\n\v\f]`

12. `[:upper:]` - Letras mayúsculas.
    - Equivalente en JavaScript: `[A-Z]`

13. `[:word:]` - Caracteres de palabra (letras, dígitos y guión bajo).
    - Equivalente en JavaScript: `\w` o `[a-zA-Z0-9_]`

14. `[:xdigit:]` - Dígitos hexadecimales.
    - Equivalente en JavaScript: `[A-Fa-f0-9]`
 * 
 */

const regEx = /a[a-zA-Z0-9]s./;
const examples = ['aaso', 'a2sa', 'q.er', 'a/wa'];
examples.forEach(element => {
    const result = regEx.test(element);
    console.log(`El valor ${element} ${result ? 'CUMPLE' : 'NO CUMPLE'} con la expresion regular ${regEx}`);
});

console.log("-------------------------")

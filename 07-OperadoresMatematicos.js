// Operadores Matemáticos/Aritméticos
/*
    + -> Adição
    - -> Subtração
    * -> Multiplicação
    / -> Divisão
    ++ -> incremento(adiciona 1 ao valor)
    -- -> decremento(reduz 1 ao valor)
    ** -> exponenciação(potência)
    % -> resto da divisão
*/

let valor1 = 50;
let valor2 = 5;

let soma = valor1 + valor2;
console.log("Resultado da Soma: " + soma);
 
let subtracao = valor1 - valor2;
console.log("Resultado da Subtração: " + subtracao);
 
let multiplicacao = valor1 * valor2;
console.log("Resultado da multiplicação: " + multiplicacao);
 
let divisao = valor1 / valor2;
console.log("Resultado da divisão: " + divisao); 
 
let incremento = valor1 + valor2;
incremento++;
console.log("Resultado do Incremento: " + incremento); 
 
let decremento = valor1 + valor2;
decremento--;
console.log("Resultado do decremento: " + decremento); 

let potencia = valor1 ** valor2;
console.log("Resultado da Potência" + potencia)
 
let modulo = valor1 % valor2;
console.log("Resultado do resto da divisão: " + modulo);
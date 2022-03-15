// Variáveis
let num1 = 10;
let num2 = 5;
let x = 2;
let y = 3;
let z = 4;
let a = 2;
let b = 3;
let c = 4;

// 2. Condicionais

// 2.1 Operadores de Comparação

// 2.1.1 ">" (maior que)
if(num1 > num2) {
    console.log("10 é maior que 5");
}
// 2.1.2 "<" (menor que)
if(num2 < num1) {
    console.log("5 é menor que 10");
}
// 2.1.3 ">=" (maior ou igual a)
if(num1 >= num2) {
    console.log("10 é maior ou igual a 5");
}
// 2.1.4 "<=" (menor ou igual a)
if(num2 <= num1) {
    console.log("5 é menor ou igual a 10");
}
// 2.1.5 "==" (igual a)
if(num1 == num2) {
    console.log("10 é igual a 5");
}
else {
    console.log("10 não é igual a 5");
}
// 2.1.6 "===" (igual em valor e tipo)
if(num1 === num2) {
    console.log("10 é igual em valor e tipo a 5");
}
else {
    console.log("10 não é igual em valor mas é em tipo (number) a 5")
}
// 2.1.7 "!=" (diferente de)
if(num1 != num2) {
    console.log("10 é diferente de 5");
}
// 2.1.8 "!==" (diferente em valor ou tipo)
if(num1 !== num2) {
    console.log("10 é diferente em valor ou em tipo de 5");
}

// 2.2 Operadores Lógicos

// 2.2.1 E &&
if(num1 > num2 && x == a) {
    console.log(true);
}
else {
    console.log(false);
}
// 2.2.2 Ou ||
if(num1 < num2 || x != y) {
    console.log(true);
}
else {
    console.log(false);
}
// 2.2.3 Não !
if(!(x === a)) {
    console.log(false);
}
else {
    console.log(true);
}

// if/else

// Verificando uma condição:
if(2 > 1) {
    console.log(true);
}
else {
    console.log(false);
}

// Verificando mais de uma condição
if(2 <= 5) {
    console.log(true);
}
else if(5 == 5) {
    console.log(false);
}
else {
    console.log("outro resultado")
}


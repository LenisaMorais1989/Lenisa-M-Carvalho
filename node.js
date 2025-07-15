// Exercício 1
Console.log (25+17) ;

// o operador + soma ; )

// Exercício 2
console. log (250-100) ;

// o operador - subtração ; )

// Exercício 3
console.log (9*6) ;

// o operador * multiplicação ; )

// Exercício 4
console.log (144/12) ;

// o operador / divisão ; )

// Exercício 5
Console.log (55/6) ;

// operador de módulo: resto da divisão 1 ; )

// Exercício 6
let x = 10 ;
x++ ; // Incrementa 1 : x passa a ser 11
console.log (x) ; // resultado: 11

// Exercício 7
let y = 5
y - -  // primeiro decremento: 4
y - - //segundo decremento: 3
console.log (y) ; // resultado 3

// Exercício 8
let resultado = ((10+5) - 3) * 2 ;
console.log (resultado) ; // resultado: 24 

// Exercício 9 
let média = ( 8 + 7.5 +10 ) / 3
console.log (média) ; // resultado 8.5

// Exercício 10
let a = 20;
let b = 5;
a += b;   // a = a + b => a = 25
a *= 2;   // a = a * 2 => a = 50
console.log("10. Resultado final de a:", a);

// Exercício 11
console.log("11. 10 > 7:", 10 > 7);  // true

// Exercício 12
console.log("12. 5 <= 3:", 5 <= 3);  // false

// Exercício 13
console.log("13. 7 == '7':", 7 == '7');   // true
console.log("13. 7 === '7':", 7 === '7'); // false

// Exercício 14
console.log("14. 10 !== '10':", 10 !== '10'); // true
console.log("14. 10 != '10':", 10 != '10');   // false

// Exercício 15
console.log("15. (5 > 3) && (8 < 10):", (5 > 3) && (8 < 10)); // true

// Exercício 16
console.log("16. (5 < 3) || (8 === 8):", (5 < 3) || (8 === 8)); // true

// Exercício 17
console.log("17. !(7 > 2):", !(7 > 2)); // false

// 18. Comparações com parênteses
console.log("18.");
console.log("(4 + 3) * 2 =", (4 + 3) * 2); // 7 * 2 = 14
console.log("4 + 3 * 2 =", 4 + 3 * 2);     // 4 + 6 = 10

// 19. Potência
console.log("\n19.");
console.log("2 * 4 =", 2 * 4); // 16

// 20. Avaliar ((10 + 2) / 2) ** 2
console.log("\n20.");
console.log("((10 + 2) / 2) * 2 =", ((10 + 2) / 2) * 2); // (12 / 2)^2 = 6^2 = 36

// 21. Soma igual a produto
console.log("\n21.");
console.log("4 + 4 === 2 * 4 =", 4 + 4 === 2 * 4); // 8 === 8 → true

// 22. Expressão com ==, !, && que dá false
console.log("\n22.");
console.log("(5 == '5') && !(4 == 4) && true =", (5 == '5') && !(4 == 4) && true); // true && false && true = false

// 23. Expressão com ||, !==, !, números que dá true
console.log("\n23.");
console.log("(5 !== '5') || !(3 === 4) || 0 || 1 =", (5 !== '5') || !(3 === 4) || 0 || 1); // true || true || false || true = true

// 24. Justificar a ordem: 5 + 3 * 2 ** 2
console.log("\n24.");
console.log("5 + 3 * 2 * 2 =", 5 + 3 * 2 * 2); // 2**2 = 4; 3*4 = 12; 5+12 = 17

// 25. r += 2 * 4 e depois r /= 2
console.log("\n25.");
let r = 3;
r += 2 * 4; // 3 + 8 = 11
r /= 2;     // 11 / 2 = 5.5
console.log("Valor final de r:", r); // 5.5

// 26. Juntar strings com espaço
console.log("\n26.");
let nome = "Ana";
let sobrenome = "Silva";
let completo = nome + " " + sobrenome;
console.log("Nome completo:", completo); // Ana Silva

// 27. ("5" + 5) == 55
console.log("\n27.");
console.log(("5" + 5) == 55  ("5" + 5) == 55); // "55" == 55 → true (coerção de tipo)

// 28. true && false || true
console.log("\n28.");
console.log("true && false || true =", true && false || true); // false || true = true

// 29. Expressão mista que dá true
console.log("\n29.");
console.log("3 + 2 * 5 == 13 && 10 < 20 =", 3 + 2 * 5 == 13 && 10 < 20); // 3+10 ==13 → true && true = true

// 30. Calcule expressão composta
console.log("\n30.");
let Resultado = (10 + 5 * 2) > (30 / 2) && !false;
// (10 + 10) = 20 > 15 → true && true → true
console.log("Resultado da expressão:", resultado);
// Calculadora Nível 1

function soma(numA, numB) {
    return numA + numB
}
soma(5, 4)

function subtracao(numA, numB) {
    return numA - numB
}
subtracao(5, 6)

function multiplicacao(numA, numB) {
    return numA * numB
}
multiplicacao(8, 6)

function divisao(numA, numB) {
    return numA / numB
}
divisao(8, 2)

//Calculadora Nível 2

console.log("-------------- Teste de Operações / Calculadora --------------")
console.log(soma(5, 6))
console.log(subtracao(5, 6))
console.log(multiplicacao(8, 6))
console.log(divisao(8, 2))
console.log(divisao(5, 0))

//Calculadora Nível 3

//Quadrado do número

function quadradoDoNumero(numA) {
    console.log(multiplicacao(numA, numA))
}
quadradoDoNumero(5)

// Média de 3 números

function mediaDeTresNumeros(numA, numB, numC) {
    return calculo = (soma(numA, numB) + numC) / 3
}

// Calcular porcentagem

function porcentagem(numA, numB) {
    let calculo = (divisao(numA, 100))
    let calculoDois = (multiplicacao(calculo, numB))
    return calculoDois
}
console.log(porcentagem(40, 80))
// Cm para Polegada

function polParaCm(pol) {
    console.log(pol * 2.54)
}

polParaCm(3)

// // String para URL

function urlConverter(url) {
    console.log("http://www." + url + ".com.br")
}

urlConverter("aprendendoJS")

// // String com exclamação

function exclamacao(param) {
    console.log(param + "!")
}

exclamacao("testando")

// //Calculando a idade dos dog

function idadeDogs(param) {
    console.log(`Se um cachorro com ${param} anos fosse um humano, ele teria ` + param * 7 + " anos")
}
idadeDogs(5)

// //Calculo salário/hora

function valorHora(salario, hora) {
    console.log(salario / hora)
}
valorHora(1800, 160)

// //Calculo IMC

function calcIMC(peso, altura) {
    console.log(peso / (altura ** 2))
}

calcIMC(70, 1.67)

// //Transformando em Uppercase

function toUpperCase(parametro) {
    console.log(parametro.toUpperCase())
}
toUpperCase("testando")

//Sabendo o tipo do parametro

function tipo(param) {
    console.log(typeof param)
}
tipo(3)

//Sabendo a circunferência

function circunferência(param) {
    console.log(2 * Math.PI * param)
}
circunferência(5)

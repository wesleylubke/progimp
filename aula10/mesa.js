//1 - imprimir inverso

let ctd = ["Certified", "Tech", "Developer"]
let d = ctd.pop()
let t = ctd.pop()
console.log(`Se colocar 'Certified Tech Developer ao contrário', o resultado é: ${ d } ${ t } ${ ctd }`)

//2 - Inverter array

function inverterArray(ctd) {
    let d = ctd.pop()
    let t = ctd.pop()
    let c = ctd
    console.log(`Se colocar 'Certified Tech Developer ao contrário', o resultado é: ${ d } ${ t } ${ c }`)
}

inverterArray(["Certified", "Tech", "Developer"])

// Somar Array

let numeros = [1, 2, 3, 4, 5]
let soma = numeros.reduce(function somar(soma, numero) {
    let somaAtual = soma + numero;
    return somaAtual;
}, 0);

console.log(soma)

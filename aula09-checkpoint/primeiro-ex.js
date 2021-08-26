// Ex 1

function senha(num) {
    if (num == 1234) {
        return console.log('Acesso Permitido')
    } else {
        return console.log('Acesso Negado')
    }
}

senha(124)

// Ex 2

function valor(numA, numB) {
    if (numA > numB) {
        return console.log(`O número ${numA} é maior que ${numB}`)
    } else if (numA < numB) {
        return console.log(`O número ${numA} é menor que ${numB}`)
    } else {
        return console.log("Os dois números são iguais")
    }

}

valor(1, 1)

// Ex 3
let mes = 3

switch (mes) {
    case 1:
        console.log('Este mês representa Janeiro')
        break
    case 2:
        console.log('Este mês representa Fevereiro')
        break
    case 3:
        console.log('Este mês representa Março')
        break
    case 4:
        console.log('Este mês representa Abril')
        break
    case 5:
        console.log('Este mês representa Maio')
        break
    case 6:
        console.log('Este mês representa Julho')
        break
    case 7:
        console.log('Este mês representa Agosto')
        break
    case 8:
        console.log('Este mês representa Agosto')
        break
    case 9:
        console.log('Este mês representa Setembro')
        break
    case 10:
        console.log('Este mês representa Outubro')
        break
    case 11:
        console.log('Este mês representa Novembro')
        break
    case 12:
        console.log('Este mês representa Dezembro')
        break
}

//Ex 4
var senha = 1234
var validacao = senha == 1234 ? 'Senha correta' : 'Senha Incorreta'
console.log(validacao)
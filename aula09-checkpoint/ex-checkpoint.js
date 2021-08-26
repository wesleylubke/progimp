function esquentarComida(opcao, tempo) {
    //opção fora da tabela
    if (opcao < 1 || opcao > 5) {
        console.log('Opção Inválida')
    }
    //para pipoca
    if (opcao == 1 && tempo < 10) {
        console.log('Tempo Insuficiente')
    }
    if (opcao == 1 && (tempo >= 10 && tempo <= 20)) {
        console.log("Prato pronto. Bom apetite!")
    }

    if (opcao == 1 && (tempo > 20 && tempo <= 30)) {
        console.log('Queimou')
    }
    if (opcao == 1 && tempo > 30) {
        console.log('KABUM')
    }
    //para macarrão e brigadeiro
    if ((opcao == 2 || opcao == 5) && tempo < 8) {
        console.log('Tempo Insuficiente')
    }
    if ((opcao == 2 || opcao == 5) && (tempo >= 8 && tempo <= 16)) {
        console.log("Prato pronto. Bom apetite!")
    }

    if ((opcao == 2 || opcao == 5) && (tempo > 16 && tempo <= 24)) {
        console.log('Queimou')
    }
    if ((opcao == 2 || opcao == 5) && tempo > 24) {
        console.log('KABUM')
    }
    //para carne
    if (opcao == 3 && tempo < 15) {
        console.log('Tempo Insuficiente')
    }
    if (opcao == 3 && (tempo >= 15 && tempo <= 30)) {
        console.log("Prato pronto. Bom apetite!")
    }

    if (opcao == 3 && (tempo > 30 && tempo <= 45)) {
        console.log('Queimou')
    }
    if (opcao == 3 && tempo > 45) {
        console.log('KABUM')
    }
    //para feijão
    if (opcao == 4 && tempo < 12) {
        console.log('Tempo Insuficiente')
    }
    if (opcao == 4 && (tempo >= 12 && tempo <= 24)) {
        console.log("Prato pronto. Bom apetite!")
    }

    if (opcao == 4 && (tempo > 24 && tempo <= 36)) {
        console.log('Queimou')
    }
    if (opcao == 4 && tempo > 36) {
        console.log('KABUM')
    }
    //para brigadeiro
}
esquentarComida(2, 17)
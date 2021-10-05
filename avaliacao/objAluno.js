const construtorAlunos = require('./construtorAlunos')


let aluno = {
    nome: "wesley",
    faltas: 2,
    notas: [6, 7, 8, 9],
    calcularMedia: function() {
        return this.notas.reduce((acum, elemento) => acum += elemento, 0) / aluno.notas.length
    },
    faltasIncremento: function() {
        return this.faltas++
    }
}

let alunos = new construtorAlunos("thaís",
    1, [8, 6, 8])
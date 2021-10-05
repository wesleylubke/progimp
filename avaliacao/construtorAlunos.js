function Aluno(nome, faltas, notas) {
    this.nome = nome;
    this.faltas = faltas;
    this.notas = notas;
    this.calcularMedia = function() {
        return this.notas.reduce((acum, elem) => acum += elem, 0) / aluno.notas.length
    };
    this.faltasIncremento = function() {
        return this.faltas++
    };
}

module.exports = Aluno
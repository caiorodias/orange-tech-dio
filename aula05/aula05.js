
/* OBJETO */
const pessoa = {
    nome: 'Caio Dias',
    idade: 26,
    corCabelo: 'preto',
    descrever: function() {
        this
        console.log(`Meu nome é ${this.nome} e aminha idade é ${this.idade}`) /* this assume o objeto, (este objeto), sendo assim independe do nome da função*/
    }
}    /* chave valor 2 chaves(nome, idade) */
/* UMA FUNÇÃO DENTRO DE UM OBJETO, CHAMAMOS DE MÉTODO */

pessoa.altura = 1.80

pessoa.descrever = function() {
    console.log(`Seu nome é ${this.nome}`) /* SUBSTITUI INCLUSIVE A FUNÇÃO */
}

delete pessoa.corCabelo

pessoa.nome = 'Rodrigo' /* DA PARA SUBSTITUIR DESSA FORMA */
pessoa.idade = '40'

pessoa['altura'] = 52 /* REATRIBUINDO VALOR, MESMA FUNÇÃO DE pessoa.nome = 'rodrigo' */
console.log(pessoa)

console.log(pessoa['idade']) /* SOLICITANDO O VALOR DO ATRIBUTO QUE TEM COMO NOME 'IDADE' */

pessoa.descrever()


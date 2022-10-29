
class Pessoa {

    nome;
    idade;
    anoDeNascimento;

    constructor(nome, idade) {     /* ISSO FAZ COM QUE NOME E IDADE SEJAM ATRIBUTOS OBRIGATÓRIOS */
        this.nome = nome
        this.idade = idade
        this.anoDeNascimento = 2022 - idade
    }

    descrever() {
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}`)
    }
}  /* PARA CRIAR UM MÉTODO(FUNÇÃO DENTRO DO OBJETO/CLASS NÃO PRECISA COLOCAR O NOME FUNCTION) */
/* CLASSE É UM PADRÃO DE COMO DEVE SER */

/* INSTANCIA NESSE CASO SERIA UMA OCORRENCIA DE UMA OBJETO */

const caio = new Pessoa('Caio Rodrigo', 26)

const glennda = new Pessoa('Glennda Monique', 21)

console.log(glennda)
console.log(caio)

glennda.descrever()
caio.descrever()
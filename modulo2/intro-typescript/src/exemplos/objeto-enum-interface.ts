//objetos também preservam os tipos das propriedades com os quais foram inicializados
// tipagem por inferência
const pessoa = {
    nome: "Mariana",
    idade: 28,
    profissao: "desenvolvedora"
}

//pessoa.idade = "29"; >> erro de tipo ao tentar alterar idade, mas usando string 

//define explicitamente o tipo e logo em seguida atribui os valores, respeitando cada tipo
const andre: { nome: string, idade: number, profissao: string } = {
    nome: "Andre",
    idade: 25,
    profissao: "pintor"
}

const paula: { nome: string, idade: number, profissao: string } = {
    nome: "Paula",
    idade: 25,
    profissao: "Desenvolvedora" // pode haver um problema pois a profissao esta escrita diferente
}

enum Profissao {
    Professora,
    Atriz,
    Desenvolvedora,
    JogadoraDeFutebol
}

interface Pessoa {
    nome: string,
    idade: number,
    //com ? torna a propriedade do objeto opcional, deixa de ser uma propriedade obrigatória, sem a interrogação todas as propriedades são obrigatórias
    profissao?: Profissao // tipo do enum criado para profissao
}

interface Estudante extends Pessoa {
    materias: string[] // lista de strings
}

//vanessa do tipo Pessoa:
const vanessa: Pessoa = {
    nome: "Vanessa",
    idade: 23,
    profissao: Profissao.Desenvolvedora
}

//jessica do tipo Estudante:
const jessica: Estudante = {
    nome: "Jessica",
    idade: 28,
    profissao: Profissao.Desenvolvedora,
    materias: ["matemática", "programação"]
}

//monica do tipo Estudante sem profissão:
const monica: Estudante = {
    nome: "Monica",
    idade: 29,
    materias: ["portugues", "geografia"]
}

function listar(lista: string[]) {
    for (let item of lista) {
        console.log("- ", item);
    }
}

listar(monica.materias);
listar(jessica.materias);
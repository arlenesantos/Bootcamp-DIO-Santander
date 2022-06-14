"use strict";
console.log("desafio 2");
var Profissao;
(function (Profissao) {
    Profissao["atriz"] = "atriz";
    Profissao["padeiro"] = "padeiro";
})(Profissao || (Profissao = {}));
var pessoa1 = {
    nome: "Maria",
    idade: 29,
    profissao: Profissao.atriz
};
var pessoa2 = {
    nome: "Roberto",
    idade: 19,
    profissao: Profissao.padeiro
};
var pessoa3 = {
    nome: "Laura",
    idade: 32,
    profissao: Profissao.atriz
};
var pessoa4 = {
    nome: "Carlos",
    idade: 19,
    profissao: Profissao.padeiro
};
console.log(pessoa1, pessoa2, pessoa3, pessoa4);
console.log("**********");

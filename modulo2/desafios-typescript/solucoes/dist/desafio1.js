"use strict";
console.log("desafio 1");
// tipagem por inferência:
var employee = {
    code: 2020,
    name: "Mary"
};
console.log(employee);
//tipagem explícita:
var employee2 = {
    code: 2022,
    name: "Peter"
};
console.log(employee2);
var employee3 = {
    code: 2022,
    name: "John"
};
console.log(employee3);
var employee4 = {};
employee4.code = 2023;
employee4.name = "Jane";
console.log(employee4);
console.log("***********");

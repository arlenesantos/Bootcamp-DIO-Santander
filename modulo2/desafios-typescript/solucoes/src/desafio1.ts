console.log("desafio 1");

// tipagem por inferência:
const employee = {
    code: 2020,
    name: "Mary"
}
console.log(employee);

//tipagem explícita:
const employee2: { code: number, name: string } = {
    code: 2022,
    name: "Peter"
}
console.log(employee2);


//usando interface:

interface Employee {
    code: number,
    name: string
}


const employee3: Employee = {
    code: 2022,
    name: "John"
}
console.log(employee3);

const employee4 = {} as Employee;
employee4.code = 2023;
employee4.name = "Jane";

console.log(employee4);
console.log("***********");



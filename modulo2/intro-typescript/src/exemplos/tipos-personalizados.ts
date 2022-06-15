
//é possível definir que a variavel pode receber um ou outro tipo
// ao invés de definir os tipos na função como:
//function somarValores(input1: number | string, input2: number | string) {...}

//é possível definir à parte - apenas para reduzir o código - e "criar tipos personalizados":

type input = number | string


function somarValores(input1: input, input2: input) {
    //para tratar a possibilidade de aceitar um ou outro tipo, é preciso validar qual tipo está recebendo e como proceder. 
    // caso receba uma string, supoe-se que a pessoa quer concatenar os dados
    if (typeof input1 === "string" || typeof input2 === "string") {
        //usa o metodo toString() para garantir que retorna apenas atrings, caso receba uma string e um número, por exemplo
        return input1.toString() + input2.toString();

    } else { // se for apenas números, soma
        return input1 + input2;
    }
}


console.log(somarValores(1, 5));
console.log(somarValores("ola", ", tudo bem?"));
console.log(somarValores('1', 5));

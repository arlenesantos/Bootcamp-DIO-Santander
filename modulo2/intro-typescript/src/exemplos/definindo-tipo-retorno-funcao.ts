//para garantir a tipagem no retorno de função é possível também definir explicitamente o tipo de retorno, podendo evitar equívocos no código e proteger a função

function somarValoresNumericos(numero1: number, numero2: number): number {
    // se caso o programador inclua toString(), mesmo tipando como numero, vai transformar o input em string e concatenar e não somar. Ao definir o tipo de retorno, o ts lança um erro
    // return numero1 + numero2.toString();
    return numero1 + numero2

}

console.log(somarValoresNumericos(1, 2))
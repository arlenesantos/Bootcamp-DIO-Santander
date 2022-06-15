// funções que não retornam nada podem receber o tipo void, para explicitar ausencia de retorno, por exemplo quando a função faz apenas o console.log

function printarValoresNumericos(numero1: number, numero2: number): void {
    console.log(numero1 + numero2)

}

console.log(printarValoresNumericos(1, 6))
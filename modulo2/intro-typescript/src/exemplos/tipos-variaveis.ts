let button = document.getElementById("button");
//é preciso especificar o tipo de elemento html que estamos manipulando, nada garante que é um input, poderia ser um texto qualquer ou um botão por exemplo
let input1 = document.getElementById("input1") as HTMLInputElement;
let input2 = document.getElementById("input2") as HTMLInputElement;

//Exemplo de função com parâmetros tipados
function adicionarNumeros(numero1: number, numero2: number, devePrintar: boolean, frase: string) {
    let resultado = numero1 + numero2
    if (devePrintar) {
        console.log(frase + resultado);
    }
    return numero1 + numero2
}

//define o tipo por inferência devido a inicialização da variável com um tipo boolean, então o ts vai aceitar os valores de true e false, nenhum outro, não é possível alterar o tipo dessa variável (como poderia ser feito em js)
let devePrintar = true;
//let frase = "O valor é: ";

// outra forma é definir explicitamente o tipo primeiro e depois inicializar a variável
//let frase: string;
//frase = "O valor é: ";

// ou em uma linha
let frase: string = "O valor é: ";

// Como a busca pelo button na linha 1 pode trazer um null (já que esse id pode não estar presente no index.html), é importante confirmar se ele tem um valor
//verifica se button existe, se não é null
if (button) {
    button.addEventListener("click", () => {
        //verifica se os inputs existem, se não são nulos
        if (input1 && input2) {
            // o input é do tipo string, como tipamos os argumentos dessa função como number, é preciso fazer a conversão, como seria o parseInt - pode-se usar o Number()
            console.log(adicionarNumeros(Number(input1.value), Number(input2.value), devePrintar, frase));
        }


    })
}

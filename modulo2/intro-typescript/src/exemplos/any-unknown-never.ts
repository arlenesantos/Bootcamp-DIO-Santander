// TIPO UNKNOWN E ANY

// unknown é um tipo que pode receber qualquer valor, similar ao any, a diferença é que unknown precisa ser validado para atribuir o tipo

let valor: unknown;
valor = 5;
valor = 'Max';

let nome: string;
// se atribuir nome = valor; isso não vai funcionar. 
//O tipo unknown não pode ser arbitrariamente atribuído. Esse tipo só pode ser atribuido se uma validação for feita:


if (typeof valor === 'string') {
    // Como tipamos que a variável nome é do tipo string, então entra no condicional e permite a atribuição 
    nome = valor;
}

// Como já foi visto, o any também recebe qualquer valor
let valorAny2: any;
valorAny2 = true;
valorAny2 = 10

// O perigo é que o any pode ser atribuído a qualquer variável tipada sem que seu tipo seja verificado
nome = valorAny2;

// Não é uma prática ruim usar unknown, já que ele força uma validação de tipos. Diferente do any, que como já vimos pode ser usado sem se preocupar com tipagem.

// TIPO NEVER E COMANDO THROW

// o tipo never quer dizer que o script pode ser interrompido ou nunca chegar a um fim
// código interrompido ou em loop infinito que nunca acaba
// é diferente do tipo void que significa que não retorna nada

function geradorDeErro(mensagem: string, codigoDeErro: number): never {
    throw { message: mensagem, errorCode: codigoDeErro }; // Nesse caso ele foi interrompido
}

// O mesmo tipo poderia ser usado se fosse usado um while loop que nunca é finalizado
geradorDeErro('Um erro ocorreu!', 500); 

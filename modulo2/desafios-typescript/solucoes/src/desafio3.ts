let botaoAtualizar = document.getElementById('atualizar-saldo');
let botaoLimpar = document.getElementById('limpar-saldo');
let soma = document.getElementById('soma') as HTMLInputElement;
let campoSaldo = document.getElementById('campo-saldo') as HTMLSpanElement;

campoSaldo.innerHTML = "0";

function somarAoSaldo(soma: number) {
    let num = Number(campoSaldo.innerHTML);
    soma += num;
    campoSaldo.innerHTML = soma.toString();
}

function limparSaldo() {
    campoSaldo.innerHTML = '';
}

if (botaoAtualizar && botaoLimpar) {
    botaoAtualizar.addEventListener('click', function () {
        somarAoSaldo(Number(soma.value));
    });

    botaoLimpar.addEventListener('click', function () {
        limparSaldo();
    });
}


public class Main {
    public static void main(String[] args) {
        Cliente titular = new Cliente();
        titular.setNome("Maria");

        Conta corrente = new ContaCorrente(titular);
        Conta poupanca = new ContaPoupanca(titular);

        corrente.depositar(500);
        corrente.transferir(200, poupanca);

        corrente.imprimirExtrato();
        poupanca.imprimirExtrato();

    }
}

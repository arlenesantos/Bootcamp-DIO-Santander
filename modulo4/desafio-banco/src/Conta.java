public abstract class Conta implements IConta {

    private static final int AGENCIA_PADRAO = 1;
    private static int SERIAL = 1;

    protected Cliente cliente;
    protected int agencia;
    protected int numero;
    protected double saldo;

    public Conta(Cliente cliente){
        this.agencia = Conta.AGENCIA_PADRAO;
        this.numero = SERIAL++;
        this.cliente = cliente;
    }

    public int getAgencia() {
        return agencia;
    }

    public int getNumero() {
        return numero;
    }

    public double getSaldo() {
        return saldo;
    }

    @Override
    public void sacar(double valor) {
        saldo -= valor;
    }

    @Override
    public void depositar(double valor) {
        saldo += valor;
    }

    @Override
    public void transferir(double valor, IConta contaDestino) {
        this.sacar(valor);
        contaDestino.depositar(valor);
    }

    protected void imprimirDados(){
        System.out.println("Titular da conta: " + this.cliente.getNome());
        System.out.println("Número da agência: " + this.agencia);
        System.out.println("Número da conta: " + this.numero);
        System.out.println("Saldo: " + this.saldo);
    }
}

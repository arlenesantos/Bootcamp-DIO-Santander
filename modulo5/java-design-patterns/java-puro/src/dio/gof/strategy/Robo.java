package dio.gof.strategy;

public class Robo {

    private Comportamento comportamento;

    //cria método set para permitir que o robo mude de comportamento (ou seja, mude a strategy)
    public void setComportamento(Comportamento comportamento) {
        this.comportamento = comportamento;
    }

    //delega a responsabilidade de movimentação do robo para a strategy
    public void mover(){
        comportamento.mover();
    }
}

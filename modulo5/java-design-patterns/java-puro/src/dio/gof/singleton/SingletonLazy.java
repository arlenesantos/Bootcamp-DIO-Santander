package dio.gof.singleton;

//SingletonLazy "preguiçoso" - irá atribuir/criar a instância somente na primeira vez que a classe é chamada
public class SingletonLazy {
    private static SingletonLazy instancia;

    //construtor privado garante que a classe não poderá ser instanciada externamente
    //ela mesma controla a sua própria instância
    private SingletonLazy() {
        super();
    }

    //método público para permitir o acesso à instância, criada pela própria classe
    public static SingletonLazy getInstancia(){
        if(instancia == null) {
            instancia = new SingletonLazy();
        }
        return instancia;
    }
}

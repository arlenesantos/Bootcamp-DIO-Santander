package dio.gof.singleton;

//SingletonEager "apressado" - no momento que a classe SingletonEager é acionada, a instância já é atribuída
// e estará pronta para ser retornada, não faz a verificação se a instância já existe.
public class SingletonEager {
   //
    private static SingletonEager instancia = new SingletonEager();
    private SingletonEager() {
        super();
    }

    public static SingletonEager getInstancia(){
        return instancia;
    }
}

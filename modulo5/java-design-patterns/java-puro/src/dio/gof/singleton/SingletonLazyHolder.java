package dio.gof.singleton;

//Singleton "holder" - classe InstanceHolder tem a função de encapsular a instância
public class SingletonLazyHolder {
    private static class InstanceHolder {
        public static SingletonLazyHolder instancia = new SingletonLazyHolder();
    }

    private SingletonLazyHolder() {
        super();
    }

    public static SingletonLazyHolder getInstancia(){
        //acessa a instancia pelo holder
        return InstanceHolder.instancia;
    }
}

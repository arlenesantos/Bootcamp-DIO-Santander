package dio.gof;

//Design Pattern:

//Singleton (Padrão Criacional) - permite a criação de uma única instância de uma classe e fornece um modo para recuperá-la
//Strategy (Padrão Comportamentol) - simplifica a variação de algoritmos para a resolução de um mesmo problema (uso de polimorfismo)
//Facade (Padrão Estrutural) - oferece uma interface que reduz a complexidade nas integrações com subsistemas.

import dio.gof.facade.Facade;
import dio.gof.singleton.SingletonEager;
import dio.gof.singleton.SingletonLazy;
import dio.gof.singleton.SingletonLazyHolder;
import dio.gof.strategy.*;

public class Test {

    public static void main(String[] args) {

        //Singleton
        System.out.println("Singleton: ");

        SingletonLazy lazy = SingletonLazy.getInstancia();
        System.out.println(lazy);
        //gera o mesmo endereço de memória, pois é a mesma instância
        lazy = SingletonLazy.getInstancia();
        System.out.println(lazy);


        SingletonEager eager = SingletonEager.getInstancia();
        System.out.println(eager);
        eager = SingletonEager.getInstancia();
        System.out.println(eager);


        SingletonLazyHolder lazyHolder = SingletonLazyHolder.getInstancia();
        System.out.println(lazyHolder);
        //gera o mesmo endereço de memória, pois é a mesma instância
        lazyHolder = SingletonLazyHolder.getInstancia();
        System.out.println(lazyHolder);


        //Strategy
        System.out.println("Strategy: ");

        Comportamento defensivo = new ComportamentoDefensivo();
        Comportamento normal = new ComportamentoNormal();
        Comportamento agressivo = new ComportamentoAgressivo();

        Robo robo = new Robo();
        robo.setComportamento(normal);
        robo.mover();
        robo.mover();

        robo.setComportamento(defensivo);
        robo.mover();

        robo.setComportamento(agressivo);
        robo.mover();
        robo.mover();
        robo.mover();

        //Facade
        System.out.println("Facade: ");
        Facade facade = new Facade();
        facade.migrarCliente("Jane Doe", "1300185");





    }
}

package subsistema2.cep;

import dio.gof.singleton.SingletonEager;

public class CepApi {

    //uso do design pattern singleton
    private static CepApi instancia = new CepApi();
    private CepApi() {
        super();
    }

    public static CepApi getInstancia(){

        return instancia;
    }

    public String recuperarCidade(String cep){
        return "Araraquara";
    }

    public String recuperarEstado(String cep){
        return "SP";
    }
}

import { Cliente } from "./Cliente.js"; 



export class ContaCorrente{ 
    //Atributo estático
    static numeroDeContas = 0;

    //Variáveis
    agencia;
    _cliente; 
    _saldo = 0; 

    //getters e setters
    set cliente(novoValor){ 
       

        if(novoValor instanceof Cliente){
        this._cliente = novoValor; 
        } else{
            console.log("você não pode colocar algo que não seja um objeto em cliente");
        }
    }
    
    get cliente(){
        return this._cliente;
    }


    
    get saldo(){
        return this._saldo;
    }

    //Construtor
    constructor(agencia, cliente){
        this.agencia= agencia;
        this.cliente = cliente; //Usando método setter dentro do construtor
        ContaCorrente.numeroDeContas++; //Chamada atributo estático
    }

    //funções
    sacar(valor){    
        if (this._saldo >= valor){
            this._saldo -= valor; 
            return valor; 
        }
    } 

    depositar(valor){ 
        
        if(valor <= 0)
        {
            return;
        }   
            this._saldo += valor;
    }

    
    transferir(valor, conta){            
            const valorSacado = this.sacar(valor);
            conta.depositar(valorSacado);
            
        }

}
//APÊNDICE
/*
Como usar construtor
construct (parâmetros){
    this.campoNaClasse = parâmetro
    ...
}

*/
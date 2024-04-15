import { Cliente } from "./Cliente.js"; //Lembrar de colocar o .js



export class ContaCorrente{ 
    
    agencia;
    _cliente; //Privando para ninguém alterar ou colocar um valor errado

    set cliente(novoValor){ //set - atribui um valor para um método privado
       

        if(novoValor instanceof Cliente){
        this._cliente = novoValor; //Atribui para o que o usuário passar dentro do atributo da classe
        } else{
            console.log("você não pode colocar algo que não seja um objeto em cliente");
        }
    }

//instanceof - verifica se o valor passado é a instância de uma classe específica

    //Para pegar um acessor = get
    get cliente(){
        return this._cliente;
    }


    _saldo = 0; 
    //O saldo só tem método get
    get saldo(){
        return this._saldo;
    }


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
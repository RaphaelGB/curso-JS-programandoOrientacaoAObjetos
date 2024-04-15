//AULA 5 - Associando nas contas um cliente (ccomposição de classes)

export class ContaCorrente{ 
    
    agencia;
    cliente;

    _saldo = 0; 

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

    // transferindo valor de uma conta para outra
    
    transferir(valor, conta){ //Recebendo objeto como parâmetro
            
            
            const valorSacado = this.sacar(valor);
            conta.depositar(valorSacado);
            
            //AULA01 - TIPO DE VALOR E TIPO DE REFERÊNCIA
                
            //TIPO DE REFERÊNCIA
            //Podemos alterar um objeto usando o parâmetro
            // conta.cidade = "São Paulo"; -  //Atribuição dinâmica do objeto
            // conta é um objeto, então pelo parâmetro é passado a versão original

            //TIPO DE VALOR
           //  valor = 20; - Como valor é tipo primitivo, ele é tipo de valor
        //Ou seja, ao passar por um parâmetro, passa-se uma cópia, sem alterar o original

        }

}

/* APÊNDICE
 Tipo primitivo - Valores simples, vindos com a linguagem, na parte mais baixa da programação
 Eles não são alteráveis, nem tem atributo ou método, então o JS passa nos parâmetros cópias das variáveis 

Tipo de referência - armazena as variáveis no heap e qualquer mudança muda todas as variáveis
heap - Espaço reservado na memória local
Elas são armazenadas como links no heap, por isso, chamadas de tipo de referência
*/


export class ContaCorrente{ //O nome representa, pois é uma estrutura

    //Abstração: quem tem agencia e saldo é a conta e não o cliente
    agencia;

    //Atributo privado - Não existe no JS
    //#saldo - https://github.com/tc39/proposal-class-fields#private-fields

    _saldo; //Indica que não deveria-se mexer neste campo

    //Funções / método - comportamentos das nossas classes

    sacar(valor){ //Parentêses = operação e não variável
       
        if (this._saldo >= valor){
            
            this._saldo -= valor; //this - acessa um atributo dentro da nossa classe
            
            return valor; //Vai retornar da função o valor sacado do saldo
            
            // return valor;  assim que ele é executado a aplicação é parada, tanto que a IDE reconhece e mostra
            //Se não tiver return, o método retorna undefined
        }

    } //Chaves = escopo do método - bloco de código

    depositar(valor){ //Os parâmetros também são chamados de argumentos e são separados por vírgula
        
        if(valor <= 0)
        {
            return;
        } //Sintaxe possível: if(valor<=0) return;
     
           //early return - retorno antecipado
            //Verifica-se todas as situações indesejadas e depois se executa o que se quiser
            
            this._saldo += valor;
    }


}

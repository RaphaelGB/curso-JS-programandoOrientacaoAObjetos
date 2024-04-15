export class Cliente{
    nome;
    _cpf;

    get cpf(){ //Elemento readonly - somente visto, não pode ser sobrescrito
        return this._cpf;
    }

    constructor(nome, cpf){
        this._cpf= cpf;
        this.nome= nome;
    }

}

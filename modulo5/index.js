
import {Cliente} from "./Cliente.js"
import {ContaCorrente} from "./ContaCorrente.js" 

const cliente1 = new Cliente( "Ricardo",45483924835); //Passando os valores da conta no construtor
const cliente2 = new Cliente("Alice",45483954623);

const contaCorrenteRicardo = new ContaCorrente(1001,cliente1);
contaCorrenteRicardo.depositar(500);


const conta2 = new ContaCorrente(102, cliente2);

let valor = 200
contaCorrenteRicardo.transferir(valor, conta2);
console.log(contaCorrenteRicardo);
console.log(conta2);

//Mostrando atributo estático
console.log("O número de contas correntes no bytebank é de: " +ContaCorrente.numeroDeContas);

//ATRIBUTOS ESTÁTICOS
/*
Atributo que é pertencente a todas as classes em comum, todas as classes possuem esse atributo
uma vez alterado em um objeto, o atributo é alterado em todos os objetos
Declaração:
    static atributo

Chamada:
    nomeDaClasse.atributo
*/
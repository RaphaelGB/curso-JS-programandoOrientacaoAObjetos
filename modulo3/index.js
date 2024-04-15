
import {Cliente} from "./Cliente.js"
import {ContaCorrente} from "./ContaCorrente.js" 

const cliente1 = new Cliente();
cliente1.nome ="Ricardo";
cliente1.cpf = 45483924835;


const cliente2 = new Cliente();
cliente2.nome ="Alice";
cliente2.cpf = 45483954623; 

const contaCorrenteRicardo = new ContaCorrente();
contaCorrenteRicardo.agencia = 1001;
contaCorrenteRicardo.cliente = cliente1; //Atribuí um objeto a um atributo da classe
contaCorrenteRicardo.depositar(500);


const conta2 = new ContaCorrente();
conta2.cliente = cliente2;
conta2.agencia = 102;

let valor = 200
contaCorrenteRicardo.transferir(valor, conta2);

// console.log(valor); o valor não é alterado pois é um tipo primitivo
console.log(conta2);
console.log(contaCorrenteRicardo);
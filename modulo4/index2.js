


import {Cliente} from "./Cliente.js"
import {ContaCorrente} from "./ContaCorrente.js" 

const cliente1 = new Cliente(); 
cliente1.nome ="Ricardo";
cliente1.cpf = 45483924835;


//Boa prática - sempre fazer de fora
 const cliente2 = new Cliente();
 cliente2.nome ="Alice";
 cliente2.cpf = 45483954623; 


const contaCorrenteRicardo = new ContaCorrente();
contaCorrenteRicardo.agencia = 1001;
contaCorrenteRicardo.cliente = 0;  
contaCorrenteRicardo.depositar(500);


const conta2 = new ContaCorrente();
conta2.cliente = cliente2;
conta2.agencia = 102;


//Problema: qualquer um pode mudar para qualquer coisa o valor que deveria ser um objeto
conta2.cliente = 0;
//Solução - privar o atributo


let valor = 200

console.log(contaCorrenteRicardo);
console.log(conta2);
console.log(conta2.cliente); // usa o método get
console.log(conta2.saldo); //Pega o valor do saldo

//Tentando colocar um valor em um atributo privado
/*conta2.saldo = 3000;
console.log(conta2.saldo); 
Dá erro, pois o JS entende que ele só tem o método getter e não o set
*/

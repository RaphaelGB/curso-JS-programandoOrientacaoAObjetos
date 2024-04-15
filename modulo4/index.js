
import {Cliente} from "./Cliente.js"
import {ContaCorrente} from "./ContaCorrente.js" 

const cliente1 = new Cliente(); //Instancia e retorna um endereço da memória (uma referência)
cliente1.nome ="Ricardo";
cliente1.cpf = 45483924835;


//Boa prática - sempre fazer de fora
// const cliente2 = new Cliente();
// cliente2.nome ="Alice";
// cliente2.cpf = 45483954623; 

const contaCorrenteRicardo = new ContaCorrente();
contaCorrenteRicardo.agencia = 1001;
contaCorrenteRicardo.cliente = cliente1;  //1° forma de colocar um objeto na classe
contaCorrenteRicardo.depositar(500);


const conta2 = new ContaCorrente();
conta2.cliente = new Cliente(); //2° forma
conta2.agencia = 102;
conta2.cliente.nome = "Alice";
conta2.cliente.cpf =  null; //Mesma coisa do undefined, mas explícito

// conta2.cliente = cliente2;

let valor = 200
contaCorrenteRicardo.transferir(valor, conta2);
console.log(conta2);
console.log(contaCorrenteRicardo);

//Todo atributo dentro de um objeto que não tem valor dentro é dito como undefined
//Null: diz que não tem nada dentro (mesmas propriedades do undefined), mas é explícito, deve ser colocado
//Null: intencional / undefined: padrão
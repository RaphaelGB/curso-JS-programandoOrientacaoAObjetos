//AULA 04 - Modulos Javascript
// Para facilitar o uso, colocamos as classes cliente e conta corrente em arquivos separados e importamos

//import - traz as classes de um arquivo de fora
import {Cliente} from "./Cliente.js"
import {ContaCorrente} from "./ContaCorrente.js" //Pode-se colocar o caminnho absoluto ou resumido


//PACKAGE.JSON
//O Node trabalha com um arquivo de configuração chamado package.json, para importar
// as classes, é necessário ele entender os arquivos como módulos
//Contudo, por definição, uma página index não é tratada como módulo
//Precisamos então mudar isso no package.json
//Iniciando o json: npm init (no terminal)

//Nota: talvez não seja interessante usar os módulos na produção, pois ainda não são 100% compatíveis

const cliente1 = new Cliente();

 cliente1.nome ="Ricardo";
 cliente1.cpf = 45483924835;


 const cliente2 = new Cliente();

 cliente2.nome ="Alice";
 cliente2.cpf = 45483954623; 

 const contaCorrenteRicardo = new ContaCorrente();

 

//Atributo privado:
// contaCorrenteRicardo.saldo = 110; 
//Apesar do código ter a indicação, se for colocado dessa forma, o JS cria na instância da classe um novo atributo próprio porque é dinamicamente tipado

//mesmo com a indicação, é possível alterar o saldo dentro da classe
contaCorrenteRicardo._saldo = 0;

contaCorrenteRicardo.agencia = 1001;
console.log(contaCorrenteRicardo._saldo); //Mostra somente o valor do atributo

contaCorrenteRicardo.depositar(100);
contaCorrenteRicardo.depositar(-20); //Não é depositado, pois o valor é negativo
 
 console.log("Após o depósito o saldo é de: "+ contaCorrenteRicardo._saldo);
 

//Executando um método da classe conta corrente e tentando guardar em uma variável
const valorSacado = contaCorrenteRicardo.sacar(50); //Sem o método return, o valor aparece como undefined

console.log("Valor Sacado" +valorSacado);
console.log("O novo saldo do Ricardo após o saque é de: " + contaCorrenteRicardo._saldo );


//AULA 2 - ATRIBUTOS PRIVADOS
// //Adicionando depósito manualmente
// contaCorrenteRicardo.saldo += 100;
// contaCorrenteRicardo.saldo += 200 // soma duzentos
// //Problema: Se alguém mexer no código depositando um valor negativo, isso fere uma regra de negócio
// contaCorrenteRicardo.saldo += -1; //Não existe depósito negativo, mas nosso programa atualmente permite

// console.log("Novo saldo disponível: " + contaCorrenteRicardo.saldo); //Mostra o novo valor do saldo


//Aula 3 - Return
// Serve para retornar um valor de uma função para usarmos mais tarde
// Serve para fazer early return - quando queremos que uma aplicação pare mais cedo se não atinge nossa regra de negócio






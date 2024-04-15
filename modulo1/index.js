//Problema: uma empresa de banco, o bytebank, quer cadastrar clientes e poder criar contas para ele

/* AULA 1
Problema: repetição excessiva de código

const cliente1Nome ="Ricardo";
const cliente1CPF = 45483924835;
const cliente1Agencia = 1001;
const cliente1Saldo = 0;

const cliente2Nome = "Alice";
const cliente2CPF = 454831234125;
const cliente2Agencia = 1001;
const cliente2Saldo = 0;


*/
//Selecionar várias linhas: Ctrl + Alt + seta

// console.log(cliente1Nome);

//Analisando, informações que o bytebank quer
/*
Nome do cliente
CPF
Agencia
Saldo

Se essas informações vão repetir, é útil usar um molde para armazenar todos esses dados, já que eles se repetem em todos os casos
*/

//AULA 2
// classe - molde ou estrutura que vai ser replicada

//Criando a classe ( class NomeClasse{} )

class Cliente{
    //Criando atributos = variáveis = campos = propriedades
    nome;
    cpf;
    agencia;
    saldo;
    rg;
}

//Criando um novo Cliente e guardando em uma variável para acessar os atributos dele

const cliente1 = new Cliente();

//Como acessar atributos

 cliente1.nome ="Ricardo";
 cliente1.cpf = 45483924835;
 cliente1.agencia = 1001;
 cliente1.saldo = 0;

 //variavel.atributo = dado;

 const cliente2 = new Cliente();

 cliente2.nome ="Alice";
 cliente2.cpf = 45483954623;
 cliente2.agencia = 1001;
 cliente2.saldo = 0;
console.log(cliente1, cliente2); //Imprime o cliente inteiro 

//Se for feito a mudança na classe, todos os objetos (as instâncias das classes, são alteradas)
//A partir desse trecho, foi adicionado o atributo rg



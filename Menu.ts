import readlineSync = require("readline-sync");
import { colors } from "./src/util/Colors";
import { ContaCorrente } from "./src/model/ContaCorrente";
import { ContaPoupanca } from "./src/model/ContaPoupanca";
import { ContaController } from "./src/controller/ContaController";

export function main(){

    let contas: ContaController = new ContaController();

    let opcao, numero, agencia, tipo, saldo, limite, aniversario: number;
    let titular: string;

    const tiposContas = ['Conta Corrente', 'Conta Poupanca'];

    const contacorrente: ContaCorrente = new ContaCorrente(2,123,1, "mariana", 15000, 1000);
    contacorrente.visualizar();
    contacorrente.sacar(2000);
    contacorrente.visualizar();
    contacorrente.depositar(1000);
    contacorrente.visualizar();

    const contapoupanca: ContaPoupanca = new ContaPoupanca(3, 123, 2, "Victor", 1000, 10);
    contapoupanca.visualizar();
    contapoupanca.sacar(200);
    contapoupanca.visualizar();
    contapoupanca.depositar(1000);
    contapoupanca.visualizar();

        while (true){
            console.log(colors.bg.black,colors.fg.bluestrong)
            console.log("\n*********************************************************\n");
            console.log("                                                             ");
            console.log("\n********* BANCO DO BRAZIL COM Z  ********\n");
            console.log("                                                             ");
            console.log("\n*********************************************************\n");
            console.log(colors.bg.black, colors.fg.yellow);
            console.log(" 1- Criar Conta ");
            console.log(" 2 - Listar todas as contas    ");
            console.log(" 3 - Buscar Conta por Numero    ");
            console.log(" 4 - Atualizar Dados da conta  ");
            console.log(" 5 -  Apagar Conta ");
            console.log(" 6 - Sacar   ");
            console.log(" 7 - Depositar  ");
            console.log(" 8 - Transferir valores entre Contas   ");
            console.log(" 9- Sair   ");
            console.log("\n*********************************************************\n");
            (colors.reset);
            console.log("Entre com a opção desejada:> ");
            
            opcao = readlineSync.questionInt("");

            if(opcao == 9){
                console.log(colors.fg.bluestrong)
                console.log("\n Banco do Brazil - O seu Futuro Comeca Aqui ^-^");
                sobre();
                console.log(colors.reset,"");
                process.exit(0);
            }
    
            switch(opcao){

                case 1:
                    console.log("\n\nCriar Conta\n\n");
                    console.log("Digite o Numero da agencia")
                    agencia = readlineSync.questionInt("");

                    console.log("Digite o Nome do Titular da conta")
                    titular = readlineSync.question("");


                    console.log("\nDigite o tipo da conta")
                    tipo = readlineSync.keyInSelect(tiposContas,"", {cancel:false}) + 1;


                    console.log("Digite o Saldo da conta (R$)")
                    saldo = readlineSync.questionFloat("");

                    switch (tipo) {
                        case 1:
                            console.log("Digite o limite da Conta  (R$): ");
                            limite = readlineSync.questionFloat("");
                            contas.cadastrar(
                                new ContaCorrente(contas.gerarNumero(), agencia, tipo, titular, saldo, limite));                            
                                break

                                case 2:
                            console.log("Digite o do seu aniversario da Conta Poupanca:");
                            aniversario = readlineSync.questionInt("");
                            contas.cadastrar(
                                new ContaPoupanca(contas.gerarNumero(), agencia, tipo, titular, saldo, aniversario));                
                                    break
                    }



                case 2:
                    console.log("\n\nListar todas as Contas\n\n");
                    break

                case 3:
                    console.log("\n\nConsulta Dados da Conta\n\n");

                    contas.listarTodas();
                    break

                case 4:
                    console.log("\n\nAtualizar Dados da Conta\n\n");
                    break

                case 5:
                    console.log("\n\nApagar Conta\n\n");
                    break

                case 6:
                    console.log("\n\nSaque\n\n");
                    break

                case 7:
                    console.log("\n\nDeposito\n\n");
                    break

                case 8:
                    console.log("\n\nTransferência entre Contas\n\n");
                    break

                default:
                    console.log("\n\nOpção Inválida!\n\n");
            }
        }
}

export function sobre(): void{
    console.log(colors.fg.magentastrong)
    console.log("\n*********************************************************");
    console.log("Projeto Desenvolvido por: Wadssa Wacemberg ^-^");
    console.log("wadssa@gmail.com");
    console.log("https://github.com/wadssa-arch");
    console.log("\n*********************************************************\n");
    console.log(colors.reset);
}
main();
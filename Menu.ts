import readlineSync = require("readline-sync");
import { colors } from "./src/util/Colors";
import { Conta } from "./src/model/Conta";

export function main(){

    let opcao:number;

    const conta: Conta = new Conta(1, 123, 1, "adriana", 10000);
    conta.visulalizar();
    conta.sacar(10500);
    conta.visulalizar();
    conta.depositar(5000);
    conta.visulalizar();
    
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
                    break

                case 2:
                    console.log("\n\nListar todas as Contas\n\n");
                    break

                case 3:
                    console.log("\n\nConsulta Dados da Conta\n\n");
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
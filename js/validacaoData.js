//US 002 -  Valida data de nascimento do cliente
function verificaSeDataNascimentoInvalida (cliente){
    // Valida se a data está incompleta, vazia ou nula (Inválida)
    if(cliente.dtNascimento === "" || cliente.dtNascimento === null)
        return "Data Inválida";
    
    // Separando a data recebida do formulário pelo caractere '-' e adicionando em uma variável
    const dataNascimentoCompleta = cliente.dtNascimento.split('-');

    // Separando a data e fazendo conversão para inteiro
    const anoNascimento = parseInt(dataNascimentoCompleta[0]);
    const mesNascimento = parseInt(dataNascimentoCompleta[1]);
    const diaNascimento = parseInt(dataNascimentoCompleta[2]);

    const anoAtual = new Date().getFullYear();
    const mesAtual = new Date().getMonth()+1; // +1 pois o mês começa em 0
    const diaAtual = new Date().getDate();

    let idade = 0;

    /*Valida se a data está no futuro:
    Se o ano de nascimento for maior que o ano atual
    OU (||) Ano de nascimento é o atual E (&&) o mês de nascimento é maior que o atual
    OU (||) Ano de nascimento é o atual E (&&) (Mês de nascimento é igual ao atual E (&&) o dia de nascimento é maior que hoje)
    */
    if((anoNascimento > anoAtual)
    || (anoNascimento === anoAtual && mesNascimento > mesAtual)
    || (anoNascimento === anoAtual && (mesNascimento === mesAtual && diaNascimento > diaAtual)))
        return "Data futura!";

    /* Verifica se o cliente já pode ter feito aniversário este ano:
    Se o mês de nascimento é menor que o mês atual
    OU (||) Se o mês de nascimento é igual ao atual E (&&) o dia de nascimento é menor ou igual a hoje
    */
    if((mesNascimento < mesAtual) 
    || (mesNascimento === mesAtual && (diaNascimento <= diaAtual)))
        //Se o usuário já fez aniversário este ano a sua idade será a subtração do ano atual com seu ano de nascimento
        idade = anoAtual - anoNascimento;
    else
        //Se o usuário não fez aniversário este ano devemos subtrair 1 ano da idade
        idade = anoAtual - anoNascimento - 1; 
    
    // Retorna se a data informada representa alguém com menos de 18 anos (true) ou não (false)
    if(idade < 18)
        return "Menor de idade!";
    else
        return "Ok";
}
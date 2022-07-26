/**
 * VALIDAÇÕES
 */
function verificaSeNomeInvalido(cliente){

    if(cliente.nome == null || cliente.nome == ''){
        return true;
    }else{
        return false;
    }
}


function verificaMenor18Anos (cliente){

    let dataNascimentoCompleta = cliente.dtNascimento.split('-');
    // Separando a data e fazendo conversão para inteiro
    let anoNascimento = parseInt(dataNascimentoCompleta[0]);
    let mesNascimento = parseInt(dataNascimentoCompleta[1]);
    let diaNascimento = parseInt(dataNascimentoCompleta[2]);

    let anoAtual = new Date().getFullYear();
    let mesAtual = new Date().getMonth()+1; // +1 pois o mês começa em 0
    let diaAtual = new Date().getDate();

    let aniversarioEsteAno = false;

    let idade = 0;

    // Verifica se o mês de nascimento é menor ao mês atual. 
    // Em caso positivo significa que o usuário já fez aniversário este ano
    if(mesNascimento < mesAtual)
        aniversarioEsteAno = true;
    
    // Verifica se o mês de nascimento é igual ao mês atual. 
    // Em caso positivo é necessário validar o dia para então dizer se o usuário já fez aniversário este ano
    if(mesNascimento === mesAtual)
        if(diaNascimento <= diaAtual)
            aniversarioEsteAno = true;
    
    if(aniversarioEsteAno)
        idade = anoAtual - anoNascimento ;
    else
        idade = anoAtual - anoNascimento - 1; //Se o usuário não fez aniversário este ano devemos subtrair 1 ano da idade

    // Retorna se a data informada representa alguém com menos de 18 anos (true) ou não (false)
    if(idade < 18)
        return true;
    else
        return false;
}
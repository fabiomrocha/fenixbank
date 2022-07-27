/**
 * Após o clique do botão "Cadastrar" na tela cadastro.html
 * inicia-se o evento abaixo pois o método addEventListener
 * está escutando todos os eventos da tela
 */
var botao = document.getElementById("botao");
botao.addEventListener('click', () => {

    carregaObjetosDaTela();

});
// botao.addEventListener('click', function(){

//     carregaObjetosDaTela();

// });

/**
 * O evento de click do botão chamou esta function para carregar os objetos da tela
 */
function carregaObjetosDaTela(){
    
    var cliente = new Object();

    cliente.nome = document.getElementById("nome").value;
    cliente.dtNascimento = document.getElementById("dtNascimento").value;
    cliente.cpf = document.getElementById("cpf").value;
    cliente.nomeMae = document.getElementById("nomeMae").value;
    cliente.telefone = document.getElementById("telefone").value;
    cliente.email = document.getElementById("email").value;
    
    console.log(cliente.nome);
    // console.log(cliente.dtNascimento);
    // console.log(cliente.cpf);
    // console.log(cliente.nomeMae);
    // console.log(cliente.email);
    // console.log(cliente.telefoneCelular);

    validarCampos(cliente);
};

/**
 * Após o carregamento dos dados do cliente será realizada a validação dos campos
 * 
 * Cada validação deverá chamar o seu método de validação
 * 
 * No addMessage - primeiro parametro - deve-se passar o nome da div que será apresentado o erro. 
 * 
 * No addMessage - segundo parametro - é opcional enviar uma mensagem específica. 
 */
function validarCampos(cliente){

    if( verificaSeNomeInvalido(cliente) ){
        addMessage("nome", "Nome inválido!");
    }
    
    // Validação Data de Nascimento US02
    // Recebe retorno com mensagem de validação da Data
    let validacaoData = verificaSeDataNascimentoInvalida(cliente)
    
    // Se a mensagem for diferente de Ok (Data Inválida), então adiciona mensagem em tela
    if(validacaoData !== "Ok"){
        addMessage("dtNascimento", validacaoData);
    }

    if( verificaEmailInvalido(cliente) ){
        addMessage("email", "Email inválido!");
    }
    
    if(cliente.cpf == ''){
        addMessage("cpf");
    }

}

/**
 * Caso ocorra algum erro na validação, será gerado uma mensagem que será apresentada na tela
 *  primeiro parametro - deve-se passar o nome da div que será apresentado o erro. 
 *  segundo parametro - é opcional enviar uma mensagem específica. 
 */
function addMessage(nomeCampo, textoDeErro){

    let mensagem;

    if(textoDeErro == undefined){
        mensagem = "<font color='red' size=1px>Campo inválido </font>";
    }else{
        mensagem = "<font color='red' size=1px>"+textoDeErro+" </font>";
    }

    document.getElementById(nomeCampo+"Error").innerHTML = mensagem;
    document.getElementById(nomeCampo).style.border = "2px solid red";

}

/**
 * Esta function é responsável por limpar a mensagem de erro e retirar a
 * borda vermelha assim que o cliente clicar no campo para preenchê-lo.
 * Será iniciado no onfocus do input selecionado.
 */
function limpaCampo(campo){

    // Retira a mensagem de erro e espera o cliente colocar o nome certo
    let campoErro = document.getElementById(campo+"Error"); 
    if (campoErro != null){
        campoErro.innerHTML="";
    }

    // Retira a borda vermelha do campo
    let campoInput = document.getElementById(campo);
    if (campoInput != null){
        campoInput.style.border = "1px double #166E30";
    }

}
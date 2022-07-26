
/**
 * Após o clique do botão "Cadastrar" na tela cadastro.html
 * inicia-se o evento abaixo pois o método addEventListener
 * está escutando todos os eventos da tela
 */
var botao = document.getElementById("botao");
botao.addEventListener('click', function(){

    carregaObjetosDaTela();

    mensagens.forEach(function (item, indice, array) {
        console.log(item, indice);
      });
});

/**
 * O evento de click do botão chamou esta function para carregar os objetos da tela
 */
function carregaObjetosDaTela(){
    
    var cliente = new Object();

    cliente.nome = document.getElementById("nome").value;
    cliente.dtNascimento = document.getElementById("dtNascimento").value;
    cliente.cpf = document.getElementById("cpf").value;
    cliente.nomeMae = document.getElementById("nomeMae").value;
    cliente.telefoneCelular = document.getElementById("telefoneCelular").value;
    cliente.email = document.getElementById("email").value;
    
    console.log(cliente.nome);
    console.log(cliente.dtNascimento);
    console.log(cliente.cpf);
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
    if(cliente.nome == ''){
        addMessage("nome", "Nome inválido!");
    }
    if(cliente.dtNascimento == ''){
        addMessage("dtNascimento");
    }
    if(cliente.cpf == ''){
        addMessage("cpf", "Data inválida!");
    }

}

/**
 * Caso ocorra algum erro na validação, será gerado uma mensagem que será apresentada na tela
 *  primeiro parametro - deve-se passar o nome da div que será apresentado o erro. 
 *  segundo parametro - é opcional enviar uma mensagem específica. 
 */
var mensagens = [];
function addMessage(nomeCampo, textoDeErro){

    let mensagem;

    if(textoDeErro == undefined){
        mensagem = "<font color='red'>Campo inválido </font>";
    }else{
        mensagem = "<font color='red'>"+textoDeErro+" </font>";
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
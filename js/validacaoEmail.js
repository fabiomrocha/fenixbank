/**
História 3 - Verifica Email Inválido. 

Regras do Negócio:
    1) Não possuir espaços;
    2) Deve possuir o símbolo @;
    3) Deve possuir algum caracter "válido" antes do símbolo @;
    4) Deve possuir algum caracter "válido" depois do símbolo @;
    5) Deve possuir pelo menos um ponto após o símbolo @;
    6) Deve possuir algum caracter após o último ponto;

Nesta função, recebemos o conteudo do campo email e separamos em duas partes:
    1ª) usuario  == antes do símbolo @;
    2ª) dominio  == depois do símbolo @;
*/

function verificaSeEmailInvalido(cliente) {

    // console.log(usuario, dominio);
    
    if (cliente.email == null || cliente.email == '') {
        return false;
    } 

    /* 
    O método substring é utilizado para selecionar caracteres dentro do email.
    O método indexOf() é utilizado para recuperar a posição do símbolo @ dentro do email.
   */

    var usuario = cliente.email.substring (0, cliente.email.indexOf("@") );
    var dominio = cliente.email.substring (cliente.email.indexOf("@") + 1, cliente.email.length );
    
    /*
    Ratificando aquelas validações supracitadas, temos a seguinte lógica:
    */
  
    if ( 
        // usuário >= 1 caracter.
        (usuario.length < 1) ||
        // usuário não pode conter “ ” ou espaço.
        (usuario.search(" ") != -1) ||
        // domínio >= 3 caracteres.
        (dominio.length < 3) ||
        // domínio não pode conter o @.
        (dominio.search("@") != -1) ||
        (dominio.search("/") != -1) ||
        // domínio não pode conter o “ ” espaço em branco.
        (dominio.search(" ") != -1) || 
        // domínio tem que possuir “.” ponto.
        (dominio.search(".") == -1) ||
        // primeiro ponto >= 1, já que a posição 0 deve possuir algum caracter logo após o símbolo @.
        (dominio.indexOf(".") < 1) ||
        dominio[dominio.indexOf(".") +1] == "." ||
        // posição do ultimo ponto < ultimo caracter, que deve conter um caracter no final.
        (dominio.lastIndexOf(".") == dominio.length -1)
        ) 
        { 
            return true;
        }   
    else {
            return false;
        }
}
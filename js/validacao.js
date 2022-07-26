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
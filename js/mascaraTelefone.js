/**
 * FUNÇÃO PARA COLOCAR A MÁSCARA DO CAMPO TELEFONE
 * INSERE A MÁSCARA PARA TELEFONE RESIDENCIAL E
 * PARA O TELEFONE CELULAR
 */
function mascaraFone(event) {
    var valor = document.getElementById("telefone").value;
    // Verifica caracteres não numéricos e substitui por ""
    var retorno = valor.replace(/\D/g, "");
    // Verifica 0 a esquerda e subititui por ""
    retorno = retorno.replace(/^0/, "");
    if (retorno.length == 11) {
        // Muda posicionamento "-" para o telefone celular de 9 dígitos
        // Máscara do telefone celular (99) 99999-9999
        retorno = retorno.replace(/^(\d\d)(\d{5})(\d{4}).*/, "($1) $2-$3");
    } else if (retorno.length >= 6) {
            if (retorno.length == 6 && event.code == "Backspace") { 
                // Interrompe a execução para não ficar mascarando o "-" telefone indefinidamente
                return; 
            } 
            // Máscara do telefone residencial (99) 9999-9999
        retorno = retorno.replace(/^(\d\d)(\d{4})(\d{0,4}).*/, "($1) $2-$3");
    } else if (retorno.length >= 2) {
            retorno = retorno.replace(/^(\d\d)(\d{0,4})/, "($1) $2");
            // Coloca a máscara do DDD "()" até o 4 digito do telefone
            // retorno = retorno.replace(/^(\d\d)(\d{0,4})/, "($1) $2");
        } else if (retorno.length != 0) {
                // Coloca a máscara do DDD "("
                retorno = retorno.replace(/^(\d*)/, "($1");
            }
    document.getElementById("telefone").attributes[0].ownerElement['value'] = retorno;
}
    

export class Cliente{
    constructor(nome, dtNascimento, cpf, nomeMae, telefoneCelular, email){
        this.nome = nome;
        this.dtNascimento = dtNascimento;
        this._cpf = cpf;
        this.nomeMae = nomeMae;
        this.telefoneCelular = telefoneCelular;
        this.email = email;
    }

    get cpf(){
        return this._cpf;
    }
}
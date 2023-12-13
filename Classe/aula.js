class Pessoa {
    //definição 
    nome;
    idade;

    descrever(){
        console.log('Meu nome é ' + this.nome + ' e tenho ' + this.idade + ' anos');
    }
}

//instancia 
const duda = new Pessoa();
duda.nome = "Maria Eduarda";
duda.idade = 18;

console.log(duda)
duda.descrever();
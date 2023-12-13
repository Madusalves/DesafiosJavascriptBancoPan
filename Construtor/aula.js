class Pessoa {
    //definição 
    nome;
    idade;
    anoNascimento;
    //Construtor
    constructor(nome, idade){
        this.nome = nome;
        this.idade = idade;
        this.anoNascimento = 2023 - idade;
    }

    descrever(){
        console.log('Meu nome é ' + this.nome + ' e tenho ' + this.idade + ' anos');
    }
}

//instancia 
const Camila = new Pessoa("Camila", 18);
console.log(Camila);


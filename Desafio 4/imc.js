function calcularImc(peso,altura) {
    return peso / Math.pow(altura, 2);
}


function classificarImc(imc) {
    if(imc < 18.5)
{
    return "Abaixo do Peso";
    } else if (imc >= 18.5 && imc < 23.9) { 
       return "Peso Normal";
    }
    else if (imc >= 24 && imc <= 26.9) {
        return "Acima do peso";
    }
    else if (imc > 27 && imc <= 32.9) {   
        return "Obeso";
    }
}

function main(){
const peso = 75;
const altura = 1.75;
const imc = calcularImc(peso, altura);
console.log(classificarImc(imc));

}

main();
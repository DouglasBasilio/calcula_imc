var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";

//var trPaciente = document.querySelectorAll('#primeiro-paciente');

var pacientes = document.querySelectorAll(".paciente"); // assim pego um array da classe 'paciente'

for(i = 0; i < pacientes.length; i++){

    var paciente = pacientes[i];

    var tdPeso = paciente.querySelector('.info-peso');
    var peso = tdPeso.textContent;

    var tdAltura = paciente.querySelector('.info-altura');
    var altura = tdAltura.textContent;

    var tdImc = paciente.querySelector('.info-imc');    

    var pesoEhValido = validaPeso(peso); // true ou false
    var alturaEhValida = validaAltura(altura); 

    //só entro nesse IF se o valor for inválido (FALSE), aqui eu nego que o peso é válido com o exclamação
    if(!pesoEhValido) {
        pesoEhValido = false;
        tdImc.textContent = "Peso inválido!";
        paciente.classList.add("paciente-invalido");
    }

    if(!alturaEhValida) {
        alturaEhValida = false;
        tdImc.textContent = "Altura inválida!";
        paciente.classList.add("paciente-invalido");
    }

    if(pesoEhValido && alturaEhValida) {
        var imc = calculaImc(peso, altura);
        tdImc.textContent = imc;
    }
}
    //essa função vai me retornar se o peso esta válido
    function validaPeso(peso){
        if(peso >= 0 && peso < 1000){
            return true;
        } else {
            return false;
        }
    }

    function validaAltura(altura){
        if(altura >= 0 && altura <= 3){
            return true;
        } else {
            return false;
        }
    }

    function calculaImc(peso, altura) {
        var imc = 0;
        imc = peso / (altura*altura);
        return imc.toFixed(2);
    }


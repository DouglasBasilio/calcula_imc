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

    var pesoEhValido = true; // assumo que o peso é válido
    var alturaEhValida = true; // assumo que a altura é válida

    if(peso <=0 || peso >= 1000) {
        pesoEhValido = false;
        tdImc.textContent = "Peso inválido!";
        paciente.classList.add("paciente-invalido");
    }

    if(altura <= 0 || altura >= 3.00) {
        alturaEhValida = false;
        tdImc.textContent = "Altura inválida!";
        paciente.classList.add("paciente-invalido");
    }

    if(pesoEhValido && alturaEhValida) {
        var imc = calculaImc(peso, altura);
        tdImc.textContent = imc;
    }
}

    function calculaImc(peso, altura) {
        var imc = 0;
        imc = peso / (altura*altura);
        return imc.toFixed(2);
    }

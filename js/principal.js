var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";

var trPaciente = document.querySelector('#primeiro-paciente');
var tdPeso = trPaciente.querySelector('.info-peso');
var tdAltura = trPaciente.querySelector('.info-altura');
var tdImc = trPaciente.querySelector('.info-imc');

var peso = tdPeso.textContent;
var altura = tdAltura.textContent;

var pesoEhValido = true; // assumindo de boa fé que o peso é válido
var alturaEhValida = true; // assumindo de boa fé que a altura é válida

if(peso <=0 || peso >= 1000) {
   pesoEhValido = false;
   tdImc.textContent = "Peso inválido!";
}

if(altura <= 0 || altura >= 3.00) {
  alturaEhValida = false;
  tdImc.textContent = "Altura inválida!";
}

if(pesoEhValido && alturaEhValida) {
   var imc = peso / ( altura * altura); 
   tdImc.textContent = imc;
}
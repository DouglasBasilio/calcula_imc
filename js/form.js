var botaoAdicionar = document.querySelector("#adicionar-paciente");
botaoAdicionar.addEventListener("click", function(){
event.preventDefault(); // previno que o botão limpe os campos e recarregue a página

var form = document.querySelector("#form-adiciona"); 
var paciente = obtemPacienteDoFormulario(form);

    console.log(paciente);
    console.log(paciente.nome);
    console.log(paciente.gordura);

// crio uma variável e determino que ela é o elemento tr
var pacienteTr = document.createElement("tr");

// crio o elemento td usando
var nomeTd = document.createElement("td");
var pesoTd = document.createElement("td");
var alturaTd = document.createElement("td");
var gorduraTd = document.createElement("td");
var imcTd = document.createElement("td");

// altero o conteúdo da 'td'
nomeTd.textContent = nome;
pesoTd.textContent = peso;
alturaTd.textContent = altura;
gorduraTd.textContent = gordura;
imcTd.textContent = calculaImc(peso, altura);

// adiciono o elemento dentro de outro, no caso, o td dentro da tr
pacienteTr.appendChild(nomeTd);
pacienteTr.appendChild(pesoTd);
pacienteTr.appendChild(alturaTd);
pacienteTr.appendChild(gorduraTd);
pacienteTr.appendChild(imcTd);

// agora crio a variável tabela para associar meu tr ao tbody
var tabela = document.querySelector("#tabela-pacientes");
tabela.appendChild(pacienteTr);
})

function obtemPacienteDoFormulario(form){
    // criei um objeto paciente
    var paciente = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calculaImc(form.peso.value, form.altura.value)
    }

    return paciente; // faço o retorno do objeto

    // extraindo informações do paciente do form
/*      var nome = form.nome.value;
        var peso = form.peso.value;
        var altura = form.altura.value;
        var gordura = form.gordura.value; */
}
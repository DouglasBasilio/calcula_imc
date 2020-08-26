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
        var imc = peso / ( altura * altura); 
        tdImc.textContent = imc.toFixed(2);
    }
}

        var botaoAdicionar = document.querySelector("#adicionar-paciente");
        botaoAdicionar.addEventListener("click", function(){
        event.preventDefault(); // previno que o botão limpe os campos e recarregue a página

        var form = document.querySelector("#form-adiciona"); //pego as tags do form
        var nome = form.nome.value;
        var peso = form.peso.value;
        var altura = form.altura.value;
        var gordura = form.gordura.value;

/*         console.log(nome);
        console.log(peso);
        console.log(altura);
        console.log(gordura); */

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

        // adiciono o elemento dentro de outro, no caso, o td dentro da tr
        pacienteTr.appendChild(nomeTd);
        pacienteTr.appendChild(pesoTd);
        pacienteTr.appendChild(alturaTd);
        pacienteTr.appendChild(gorduraTd);

        // agora crio a variável tabela para associar meu tr ao tbody
        var tabela = document.querySelector("#tabela-pacientes");
        tabela.appendChild(pacienteTr);
    })


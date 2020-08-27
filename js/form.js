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
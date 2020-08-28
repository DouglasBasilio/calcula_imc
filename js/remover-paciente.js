//selecionar todos os pacientes da classe paciente
//var pacientes = document.querySelectorAll(".paciente");
//console.log(pacientes);

var tabela = document.querySelector("table");

// aqui quem vai escutar o evento é a tabela
tabela.addEventListener("dblclick", function(event){
    console.log(event.target); // alvo que foi clicado na tabela
    console.log(this); // this é o dono do evento

    var alvoEvento = event.target;
    var paiDoAlvo = alvoEvento.parentNode; // TR = paciente = remover
    paiDoAlvo.remove();
    // event.target.parentNode.remove(); poderia fazer assim também

    // event.target.remove(); aqui eu estava removendo o TD
});

/* pacientes.forEach(function(paciente) {
    paciente.addEventListener("dblclick", function(){
        console.log("Fui clicado com um duplo clique");
        this.remove(); //o paciente clicado, que está 'escutando' o evento
    });
}); */
//dbclick é um duplo clique
//dessa forma não funciona pois, se eu adicionar um paciente, não vai escutar o evento

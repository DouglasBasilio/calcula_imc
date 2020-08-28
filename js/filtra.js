var campoFiltro = document.querySelector("#filtrar-tabela"); // selecionando o campo

//escutar o evento de digitação
campoFiltro.addEventListener("input", function(){
    console.log(this.value);
    //para comparar o this.value, preciso ter a lista de pacientes
    var pacientes = document.querySelectorAll(".paciente"); // array dos pacientes
    for (var i = 0; i < pacientes.length; i++) {
        var paciente = pacientes[i];
        var tdNome = paciente.querySelector(".info-nome");
        var nome = tdNome.textContent;
        console.log(nome);
    }
});
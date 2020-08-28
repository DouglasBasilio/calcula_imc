var campoFiltro = document.querySelector("#filtrar-tabela"); // selecionando o campo

//escutar o evento de digitação
campoFiltro.addEventListener("input", function(){
    console.log(this.value);
    //para comparar o this.value, preciso ter a lista de pacientes
    var pacientes = document.querySelectorAll(".paciente"); // array dos pacientes

    // caso tenha algo digitado, executo o FOR
    if (this.value.length > 0 ) {
        for (var i = 0; i < pacientes.length; i++) {
            var paciente = pacientes[i];
            var tdNome = paciente.querySelector(".info-nome");
            var nome = tdNome.textContent;
            //console.log(nome);
            var expressao = new RegExp(this.value, "i"); // case insensitive
            if(!expressao.test(nome)){
                paciente.classList.add("invisivel");
            } else {
                paciente.classList.remove("invisivel");
            }
        }
    }
    // senão, eu removo de todos a classe de todos os pacientes
    else{
        for (var i = 0; i < pacientes.length; i++) {
            var paciente = pacientes[i];
            paciente.classList.remove("invisivel");
        }
    }
});
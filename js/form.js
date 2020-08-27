    var botaoAdicionar = document.querySelector("#adicionar-paciente");
    botaoAdicionar.addEventListener("click", function(){
        event.preventDefault(); // previno que o botão limpe os campos e recarregue a página

        var form = document.querySelector("#form-adiciona"); 

        // agora uso o objeto que extrai as informações do form      
        var paciente = obtemPacienteDoFormulario(form);

        //console.log(paciente);

        // cria a tr e a td do paciente
        var pacienteTr = montaTr(paciente);

        // agora crio a variável tabela para associar meu tr ao tbody
        var tabela = document.querySelector("#tabela-pacientes");
        tabela.appendChild(pacienteTr);
        form.reset();

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
    }

    function montaTr(paciente) {
        // crio uma variável e determino que ela é o elemento tr
        var pacienteTr = document.createElement("tr");
        pacienteTr.classList.add("paciente"); // add classe paciente ao tr

        //var pesoTd = document.createElement("td"); /* antes eu tinha que add 3 linhas para cada atributo */
        //pesoTd.classList.add("info-peso");
        //pesoTd.textContent = paciente.peso; // altero o conteúdo da 'td'

        // crio o elemento td e add a classe com a função montaTd
        // adiciono o elemento dentro de outro, no caso, o td dentro da tr
        pacienteTr.appendChild(montaTd(paciente.nome, "info-nome"));
        pacienteTr.appendChild(montaTd(paciente.peso, "info-peso"));
        pacienteTr.appendChild(montaTd(paciente.altura, "info-altura"));
        pacienteTr.appendChild(montaTd(paciente.gordura, "info-gordura"));
        pacienteTr.appendChild(montaTd(paciente.imc, "info-imc"));

        return pacienteTr;
    }

    function montaTd(dado, classe){
        var td = document.createElement("td");
        td.textContent  = dado;
        td.classList.add(classe);

        return td;
    }
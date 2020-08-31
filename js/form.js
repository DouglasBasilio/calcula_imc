    var botaoAdicionar = document.querySelector("#adicionar-paciente");
    botaoAdicionar.addEventListener("click", function(){
        event.preventDefault(); // previno que o botão limpe os campos e recarregue a página

        var form = document.querySelector("#form-adiciona"); 

        // agora uso o objeto que extrai as informações do form      
        var paciente = obtemPacienteDoFormulario(form);

        //console.log(paciente);
        
        var erros = validaPaciente(paciente);
        console.log(erros);
        if(erros.length > 0){
            //var mensagemErro = document.querySelector("#mensagem-erro");
            //mensagemErro.textContent = erros;
            exibeMensagensDeErro(erros);
            return; //ele sai da função
        }

        adicionaPacienteNaTabela(paciente);

        form.reset();

        var mensagensErro = document.querySelector("#mensagens-erro");
        mensagensErro.innerHTML = "";

    });

    function adicionaPacienteNaTabela(paciente){
        // cria a tr e a td do paciente
        var pacienteTr = montaTr(paciente);

        // agora crio a variável tabela para associar meu tr ao tbody
        var tabela = document.querySelector("#tabela-pacientes");
        tabela.appendChild(pacienteTr);
    }

    function exibeMensagensDeErro(erros){
        var ul = document.querySelector("#mensagens-erro");
        ul.innerHTML = "";

        //para cada erro eu crio uma li e add ao ul
        erros.forEach(function(erro) {
            var li = document.createElement("li");
            li.textContent = erro;
            ul.appendChild(li);
        });
    }

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

    function validaPaciente(paciente){
        
        var erros = [];

        if(paciente.nome.length == 0) erros.push("O nome não pode ser em branco");
        if(paciente.gordura.length == 0) erros.push("O campo % de Gordura não pode ficar em branco");
        if(paciente.peso.length == 0) erros.push("O campo Peso não pode ficar em branco");
        if(paciente.altura.length == 0) erros.push("O campo Altura do paciente não pode ficar em branco");

        //se o peso não for válido, cai no if
        //por ser um if simples, posso deixar numa linha e o JS entende
        if(!validaPeso(paciente.peso)) erros.push("Peso é inválido");
        
        //se a altura não for válida, cai no if
        if(!validaAltura(paciente.altura)){
            erros.push("Altura é inválida");
        }

        return erros;
    }
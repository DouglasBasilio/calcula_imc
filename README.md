###  App de Cálculo de IMC

Este app foi desenvolvido durante uma formação da Alura, utilizando HTML, CSS e JS.

<a href="https://imgur.com/5tGNCDf"><img src="https://i.imgur.com/5tGNCDf.png" title="source: imgur.com" /></a>

Na parte superior, temos uma tabela com os pacientes já cadastrados, um campo para filtro de paciente e um outro para **Buscar Paciente**.

Caso eu digite a letra "*o*" no campo filtro, o programa nos traz nomes de pacientes que contém a letra "*o*" no nome.

<a href="https://imgur.com/4dSQW4k"><img src="https://i.imgur.com/4dSQW4k.png" title="source: imgur.com" /></a>

Ao clicar em **Buscar Paciente**,  eu consumo uma API específica, que nos traz outros pacientes cadastrados.

<a href="https://imgur.com/gYsdrnD"><img src="https://i.imgur.com/gYsdrnD.png" title="source: imgur.com" /></a>

Link da [API de Pacientes][1].

[1]: http://api-pacientes.herokuapp.com/pacientes "API de Pacientes"

Abaixo uma parte do código usado para conexão:

```javascript
    var xhr = new XMLHttpRequest(); // é um objeto do JS, responsável por fazer requisições HTTP

    xhr.open("GET", "http://api-pacientes.herokuapp.com/pacientes"); // abrir a conexão

    // escuta o evento LOAD e acessa os dados da resposta
    xhr.addEventListener("load", function(){
        var erroAjax = document.querySelector("#erro-ajax");
        
        if (xhr.status == 200 ){
            erroAjax.classList.add("invisivel");
            var resposta = xhr.responseText; // carrega texto
            var pacientes = JSON.parse(resposta); //converte no array        
            pacientes.forEach( function(paciente) {
                adicionaPacienteNaTabela(paciente);
            });
        } else{
            console.log(xhr.status);
            console.log(xhr.responseText);            
            erroAjax.classList.remove("invisivel");
        }

    });

    xhr.send(); // pega a requisição e envia
```

Na parte inferior, podemos cadastrar um paciente. Caso clique em **Adicionar** e algum campo não estiver preenchido, o programa nos dá um alerta.

<a href="https://imgur.com/jPu8gRW"><img src="https://i.imgur.com/jPu8gRW.png" title="source: imgur.com" /></a>

A medida que preencho os campos e clico em adicionar, o alerta anterior referente aquele campo não é mostrado mais.

<a href="https://imgur.com/fXOYO7u"><img src="https://i.imgur.com/fXOYO7u.png" title="source: imgur.com" /></a>

Por fim, com todos os campos preenchidos, ao clicarmos em adicionar, o nome do paciente aparecerá na tabela.

<a href="https://imgur.com/ca2XUj8"><img src="https://i.imgur.com/ca2XUj8.png" title="source: imgur.com" /></a>

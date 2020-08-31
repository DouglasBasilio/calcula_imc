//
var botaoAdicionar = document.querySelector("#buscar-pacientes");

botaoAdicionar.addEventListener("click", function(){
    console.log("Buscando pacientes");

    var xhr = new XMLHttpRequest(); // é um objeto do JS, responsável por fazer requisições HTTP

    xhr.open("GET", "http://api-pacientes.herokuapp.com/pacientes"); // abrir a conexão

    // escuta o evento LOAD e acessa os dados da resposta
    xhr.addEventListener("load", function(){
        var resposta = xhr.responseText; // carrega texto

        var pacientes = JSON.parse(resposta); //converte no array        
        pacientes.forEach( function(paciente) {
            adicionaPacienteNaTabela(paciente);
        });
    });

    xhr.send(); // pega a requisição e envia

});

/* Dado que temos um XMLHttpRequest, precisamos configurar nossa requisição para dizer para qual servidor queremos enviá-la e também qual método HTTP devemos usar.

Fazemos isto através do método .open() , passando o método e a url  */
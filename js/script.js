let btnAddTarefa = document.getElementById("imagem") //função responsável pelo funcionamento do botão//
let tarefas = document.querySelector("#tarefas")
let inputTarefa = document.querySelector("#tarefa-digitada")

console.log(btnAddTarefa);

btnAddTarefa.onclick = function(){ //definição de clique//

    let valorDigitado = inputTarefa.value

    //alert("Botão Clicado!") Essa função dispara um alerta na tela quando o botão é clicado.//
 
    let tarefaNova = `<div class="col-lg-4">
    <div class="card-tarefa">
        <div class="texto Tarefa">
            Adcione uma tarefa
            ${valorDigitado} 
        </div>
        <div class="botão-tarefa">
            <img src="../imagens/botão check.png" alt="Botão check" title="Botão check" width="50px">
        </div>
    </div>
</div>`

tarefas.innerHTML += tarefaNova


}



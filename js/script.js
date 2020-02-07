let btnAddTarefa = document.getElementById("imagem") //função adcionar barra de tarefa//
let tarefas = document.querySelector("#tarefas")
let inputTarefa = document.querySelector("#tarefa-digitada")
let listaTarefas = localStorage.getItem("listaTarefas") ? JSON.parse(localStorage.getItem("listaTarefas")) : []

const salvarLocalStorage = tarefas => {
    let tarefasEmJson = JSON.stringify(tarefas)
    localStorage.setItem("listaTarefas", tarefasEmJson)
    console.log("tarefa salva com sucesso!");
}

const mostrarNaTela = arrayTarefas => {
    arrayTarefas.forEach(textoTarefa => {
        let tarefaNova = `<div class="col-lg-4">
        <div class="card-tarefa">
            <div class="texto Tarefa">
                ${textoTarefa} 
            </div>
            <div class="botão-tarefa">
                <img src="../imagens/botão check.png" alt="Botão check" title="Botão check" width="50px">
            </div>
        </div>
    </div>`

        tarefas.insertAdjacentHTML("beforeend", tarefaNova)



        let objTarefaNova = tarefas.lastElementChild
        let btnCheckTarefaNova = objTarefaNova.lastElementChild.lastElementChild
        btnCheckTarefaNova.onclick = (event) => {

            tarefas.removeChild(event.target.parentNode.parentNode.parentNode)
            listaTarefas = listaTarefas.filter(valor => valor != textoTarefa)

            salvarLocalStorage(listaTarefas)

        }

    })

}

mostrarNaTela(listaTarefas)

const criarTarefaComEnter = event => {

    if (event.keyCode == 13 || event.type == "click") {

        let valorDigitado = inputTarefa.value //quando usuário insere um valor//
        if (valorDigitado == "") {
            alert("Você deve digitar uma tarefa primeiro.") //Essa função dispara um alerta na tela quando o botão é clicado.//
            return
        }


        inputTarefa.value = ""
        let tarefaNova = `<div class="col-lg-4">
    <div class="card-tarefa">
        <div class="texto Tarefa">
            ${valorDigitado} 
        </div>
        <div class="botão-tarefa">
            <img src="../imagens/botão check.png" alt="Botão check" title="Botão check" width="50px">
        </div>
    </div>
</div>`

        listaTarefas.push(valorDigitado); //capta o valor digitado na tarefa//
        salvarLocalStorage(listaTarefas)


        tarefas.insertAdjacentHTML("beforeend", tarefaNova) //funcionalidade clicar no check//

        let objTarefaNova = tarefas.lastElementChild
        let btnCheckTarefaNova = objTarefaNova.lastElementChild.lastElementChild
        objTarefaNova.onclick = (event) => {
            tarefas.removeChild(event.target.parentNode.parentNode.parentNode)
        }


    }

}

inputTarefa.addEventListener("keypress", criarTarefaComEnter)
btnAddTarefa.addEventListener("click", criarTarefaComEnter)





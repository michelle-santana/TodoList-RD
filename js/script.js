let btnAddTarefa = document.getElementById("adicionar-tarefa");
let inputTarefa = document.getElementById("tarefa-digitada");
let divTarefas = document.getElementById("tarefas");
let listaTarefas = localStorage.getItem('tarefas')? JSON.parse(localStorage.getItem('tarefas')) : [];

const criarHtml = (valor) => {
    let html =  `<div class="col-md-4 divTarefas">
    <div class="card-tarefa">
    <div class="text-tarefa">
    ${valor}
    </div>
    <div class="botao-tarefa">
    <img src="images/check.png" alt="Botão para finalizar tarefa" title="Botão para finalizar tarefa" width="32">
    </div>
    </div>
    </div>`
    
    divTarefas.insertAdjacentHTML('beforeend', html);
    let objTarefaNova = divTarefas.lastElementChild;
    objTarefaNova.lastElementChild.lastElementChild.onclick = () => removerTarefa(objTarefaNova, valor);
}

const removerTarefa = (tarefa, textoTarefa) => {
    listaTarefas = listaTarefas.filter(valor => valor != textoTarefa)
    tarefa.remove();
    salvarTarefas(listaTarefas);
}

const adicionarTarefa = () => {
    let textoTarefa = inputTarefa.value;
    if (textoTarefa == "") {
        alert("INSIRA ALGUM DADO");
        return;
    }

    listaTarefas.push(textoTarefa);

    criarHtml(textoTarefa);
    inputTarefa.value = "";
    salvarTarefas(listaTarefas);
}

const salvarTarefas = (tarefas) => {
    let tarefasJson = JSON.stringify(tarefas);
    localStorage.setItem("tarefas", tarefasJson);
}

const mostrarNaTela = tarefas => {
    if(tarefas) {
        tarefas.forEach(textoTarefa => {
            criarHtml(textoTarefa);
        });
    }
}

btnAddTarefa.onclick = () => {
    adicionarTarefa();
}

inputTarefa.onkeypress = (e) => {
    if (e.which == 13) {
        adicionarTarefa();
    }
}

mostrarNaTela(listaTarefas);
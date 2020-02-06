let btnAddTarefa = document.getElementById("imagem") //função responsável pelo funcionamento do botão//
let tarefas = document.querySelector("#tarefas")
let inputTarefa = document.querySelector("#tarefa-digitada") 

console.log(btnAddTarefa);

//btnAddTarefa.onclick = function () { //definição de clique//

    //let valorDigitado = inputTarefa.value //pega os valores digitados//
    //if (valorDigitado == "") {
       // alert("Você deve digitar uma tarefa primeiro.") //Essa função dispara um alerta na tela quando o botão é clicado.//
       // return
    //}


   // let tarefaNova = `<div class="col-lg-4">
   // <div class="card-tarefa">
       // <div class="texto Tarefa">
         //   ${valorDigitado} 
       // </div>
       // <div class="botão-tarefa">
         //   <img src="../imagens/botão check.png" alt="Botão check" title="Botão check" width="50px">
      //  </div>
    //</div>
//</div>`

   // tarefas.innerHTML += tarefaNova

//}//

const criarTarefaComEnter = (event) => {
    
    if (event.keyCode == 13 || event.type == "click") {

        let valorDigitado = inputTarefa.value
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

        tarefas.insertAdjacentHTML("beforeend",tarefaNova) //funcionalidade clicar no check//

        let objTarefaNova = tarefas.lastElementChild
        let btnCheckTarefaNova = objTarefaNova.lastElementChild.lastElementChild
        objTarefaNova.onclick=(event) =>

        console.log(event.target.parentNode.parentNode.parentNode.remove())

    }
    
}

inputTarefa.addEventListener("keypress", criarTarefaComEnter)
btnAddTarefa.addEventListener("click", criarTarefaComEnter)



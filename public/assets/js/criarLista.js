//inputs da lista
const tituloLista = document.querySelector('#titulo')
const nomeTarefa = document.querySelector('#tarefa')
const dataHora = document.querySelector('#dataHora')
const confirmLista = document.querySelector('#confirmLista')

//inputs das tarefas
const formCriarLista = document.querySelector('#formCriarLista')
const tituloTarefa = document.querySelector('#tituloTarefa')
const tabela = document.querySelector('table')
const tbody = document.querySelector('tbody')

//restringindo valores de data e hora para atual ou futura
const objDate = new Date()
const ano = objDate.getFullYear()
const mes = (objDate.getMonth() + 1).toString().padStart(2, '0')
const dia = objDate.getDate().toString().padStart(2, '0')
const hora = objDate.getHours().toString().padStart(2, '0')
const minutos = objDate.getMinutes().toString().padStart(2, '0')
dataHora.setAttribute('min', `${ano}-${mes}-${dia}T${hora}:${minutos}`)

confirmLista.addEventListener('submit', (event) => {
    event.preventDefault()

    tituloTarefa.value = tituloLista.value
    tbody.innerHTML += `
        <tr>
            <td>
                <input type="text" name="tarefas[]" class="input-transparente" readonly autofocus = 'false'  value="${nomeTarefa.value}">
            </td>

            <td>
               <input type="text" name="datetime[]" class="input-transparente" readonly autofocus = 'false' value="${(new Date(dataHora.value).toLocaleString()).replace(',', '')}"> 
            </td>

            <td>      <!--Modal p/ confimar ou não a exclusão-->

                <button type="button" class="btn btn-danger btn-sm text-white px-3 btn-excluir" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                    X
                </button>
            </td>
        </tr>
    `
    
    tituloLista.disabled = 'true'
    nomeTarefa.value = ''
    dataHora.value = ''
})

let linhaSelecionada = null //receberá a linha toda <tr> p/exclusão no Modal

tabela.addEventListener('click', event => {
    const btnExcluir = event.target.closest('.btn-excluir')

    if(!btnExcluir) return

    linhaSelecionada = btnExcluir.closest('tr')
})

document.addEventListener('click', event => {
    const btnConfirm = event.target.closest('.btn-confirm')

    if(!btnConfirm) return

    if(btnConfirm.dataset.confirma === 'true' && linhaSelecionada) {
        linhaSelecionada.remove()
    }
    
    linhaSelecionada = null
})

formCriarLista.addEventListener('click', event => {
   
    const btnCriar = event.target.closest('.btn-criar')

    if(tbody.children.length === 0) {
       return btnCriar.click()
    } else {
        btnCriar.closest('#formCriarLista').submit()

    }
})
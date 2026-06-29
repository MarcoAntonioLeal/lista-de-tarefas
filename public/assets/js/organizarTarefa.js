const checkTarefas = document.querySelectorAll('.form-check-input')
const formSalvarTarefa = document.querySelector('.formSalvarTarefa')

const modal = new bootstrap.Modal(document.getElementById('salvarTarefa'))

formSalvarTarefa.addEventListener('click', event => {
    const btnSalvar = event.target.closest('#btn-salvar')

    if(!btnSalvar) return
   
    checkTarefas.forEach(num => {
        if(!num.checked) {
            modal.show()
        }
        return
    })
    /*if (checkTarefas.checked === false) {
        modal.show()
        return
    }*/

   formSalvarTarefa.submit()

})
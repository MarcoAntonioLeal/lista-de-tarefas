const checkTarefas = document.querySelectorAll('.form-check-input')
const formSalvarTarefa = document.querySelector('.formSalvarTarefa')

const modal = new bootstrap.Modal(document.getElementById('salvarTarefa'))

formSalvarTarefa.addEventListener('click', event => {
    const btnCriar = event.target.closest('.btn-criar')

    if(!btnCriar) return
   
    if (tbody.children.length === 0) {
        modal.show()
        return
    }

    formCriarLista.submit()

})
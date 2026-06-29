const checkTarefas = document.querySelectorAll('.form-check-input')

const modal = new bootstrap.Modal(document.getElementById('Backdrop'))

formCriarLista.addEventListener('click', event => {
    const btnCriar = event.target.closest('.btn-criar')

    if(!btnCriar) return
   
    if (tbody.children.length === 0) {
        modal.show()
        return
    }

    formCriarLista.submit()

})
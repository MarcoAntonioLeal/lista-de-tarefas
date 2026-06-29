const checkTarefas = document.querySelectorAll('.form-check-input')
const formSalvarTarefa = document.querySelector('.formSalvarTarefa')
const modal = new bootstrap.Modal(document.getElementById('salvarTarefa'))

formSalvarTarefa.addEventListener('click', event => {
    const btnSalvar = event.target.closest('#btn-salvar')
    if (!btnSalvar) return

    const check = [...checkTarefas].some(input => input.checked)

    if (!check) {
        modal.show()
        return
    }

    formSalvarTarefa.submit()
})
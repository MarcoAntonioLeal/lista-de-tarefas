const mensagemAjuda = document.querySelector('#msgAjuda')
const ol = document.querySelector('ol')

if(ol.children.length == 0) {
    mensagemAjuda.textContent = 'Clique no link abaixo para criar a sua lista de tarefas'
} else {
    mensagemAjuda.textContent = 'Clique em uma das suas listas abaixo para ver as suas tarefas'
}

let btnSelecionado = null //receberá o botão p/exclusão no Modal

document.addEventListener('click', event => {
    const btnExcluir = event.target.closest('.btn-excluir')

    if(!btnExcluir) return

    btnSelecionado = btnExcluir

})

document.addEventListener('click', event => {
    const btnConfirm = event.target.closest('.btn-confirm')

    if(!btnConfirm) return

    if(btnConfirm.dataset.confirma === 'true' && btnSelecionado) {
        btnSelecionado.closest('form').submit()
    }

    btnSelecionado = null
})
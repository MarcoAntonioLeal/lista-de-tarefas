const listModel = require('../model/listModel')

const listController = {

    // get /
    index(req, res) {
        const listas = listModel.todasAsListas()
        res.render('index', {
            listas,
            title: 'Lista de Tarefas',
            script: '<script src="/assets/js/index.js"></script>'
         })
    },

    // get /nova-lista
    novaLista(req, res) {
        res.render('criarLista', {
            title: 'Criar Lista',
            script: '<script src="/assets/js/criarLista.js"></script>'
        })
    },

    // post /criar-lista
    criarLista(req, res) {
        const titulo = req.body.titulo
        const tarefas = req.body.tarefas
        const dataHora = req.body.datetime
        listModel.criarLista(titulo, tarefas, dataHora)

        res.redirect('/')
    },

    // post /excluir-lista/:id
    excluirLista(req, res) {
        const id = Number(req.params.id)
        listModel.excluirLista(id)

        res.redirect('/')
    }
}

module.exports = listController
const listModel = require('../model/listModel')

const tarefaController = {

    // get /organizar-tarefa/:id
    organizarTarefa(req, res) {
        const id = Number(req.params.id)
        const lista = listModel.organizarTarefa(id)

        res.render('organizarTarefa', { 
            lista,
            title: 'Organizar Tarefa',
            script: ''
        })
    },

    // post /salvar-tarefa/:id
    salvarTarefa(req, res) {
        const id = req.params.id
        const status = req.body.status
        listModel.salvarTarefa(id, status)
       
        res.redirect('/')
    }

}

module.exports = tarefaController
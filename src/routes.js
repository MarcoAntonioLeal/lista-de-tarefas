const express = require('express')
const router = express.Router()
const listController = require('./controllers/listController')
const tarefaController = require('./controllers/tarefaController')

router.get('/', listController.index)
router.get('/nova-lista', listController.novaLista)
router.post('/criar-lista', listController.criarLista)
router.post('/excluir-lista/:id', listController.excluirLista)

router.get('/organizar-tarefa/:id', tarefaController.organizarTarefa)
router.post('/salvar-tarefa/:id', tarefaController.salvarTarefa)

module.exports = router
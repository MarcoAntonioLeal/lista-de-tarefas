let autoIncrement = 1

let listas = []

const listModel = {

    //Lista
    todasAsListas() {
        return listas
    },

    criarLista(titulo, tarefas, dataHora) {
        const novaLista = {
            id: autoIncrement,
            titulo: titulo,
            tarefas: tarefas,
            dataHora: dataHora,
            status: []
        }
        autoIncrement++
        const addNovaLista = listas.push(novaLista)
        
        return addNovaLista 
    },

    excluirLista(id) {
        const novaLista = listas.filter(num => num.id !== id)
        listas = novaLista
    },
    
    //Tarefas
    organizarTarefa(id) {
        const lista = listas.find(num => num.id === id)
        return lista
    },

    salvarTarefa(id, status) {
        const index = listas.findIndex(num => num.id === +id)
        listas[index].status = status
    }
}

module.exports = listModel
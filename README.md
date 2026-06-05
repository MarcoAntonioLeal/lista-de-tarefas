# 📋 Projeto Lista de Tarefas

Aplicação web para criação, gerenciamento e organização de tarefas utilizando **Node.js**, **Express**, **EJS** e arquitetura **MVC**.

<img width="1919" height="465" alt="image" src="https://github.com/user-attachments/assets/4da268ee-7361-4ef1-84fa-4a43afaa1642" />


<img width="1919" height="771" alt="image" src="https://github.com/user-attachments/assets/877d142e-4ec4-4632-9228-8c0624cf04be" />

---

## 🔗 Deploy

Acesse o projeto online:

[link](https://lista-de-tarefas-ajkw.onrender.com)/

---

# 📖 Sobre o Projeto

A **Lista de Tarefas** é uma aplicação web desenvolvida para auxiliar na organização de atividades diárias. O usuário pode criar listas personalizadas, adicionar tarefas com data e horário, excluir tarefas e gerenciar o status de cada atividade.

Além disso, a aplicação possui interface responsiva para diferentes tamanhos de tela e suporte aos temas **Dark Mode** e **Light Mode**.

---

# 🎯 Objetivo

Permitir ao usuário:

- Criar listas de tarefas;
- Adicionar múltiplas tarefas em uma mesma lista;
- Definir data e horário para cada tarefa;
- Excluir tarefas antes da criação da lista;
- Excluir listas criadas;
- Organizar tarefas utilizando os status:
  - ✅ OK
  - ⏳ Adiar
  - ❌ Não Fazer
- Alternar entre tema escuro e claro;
- Utilizar a aplicação em dispositivos desktop e mobile.

---

# ✨ Funcionalidades

## Gerenciamento de Listas

- Criar listas de tarefas;
- Excluir listas existentes;
- Visualizar todas as listas criadas.

## Gerenciamento de Tarefas

- Adicionar tarefas dinamicamente;
- Definir data e horário;
- Remover tarefas antes da criação da lista;
- Organizar tarefas por status.

## Interface

- Layout responsivo;
- Temas Dark e Light;
- Utilização de modais para confirmação de ações;
- Feedback visual através de cores para os status das tarefas.

---

# 🏗️ Arquitetura

A aplicação foi desenvolvida utilizando o padrão arquitetural **MVC (Model-View-Controller)**.

## Model

Responsável pelo gerenciamento dos dados da aplicação.

- Criação de listas;
- Exclusão de listas;
- Armazenamento das tarefas;
- Atualização dos status.

## View

Responsável pela interface apresentada ao usuário.

- EJS (Embedded JavaScript Templates);
- Bootstrap;
- HTML;
- CSS.

## Controller

Responsável por intermediar as requisições entre as Views e o Model.

- Criação de listas;
- Exclusão de listas;
- Organização das tarefas;
- Atualização dos status.

---

# ⚙️ Renderização

A aplicação utiliza **SSR (Server Side Rendering)** através do EJS.

As páginas são renderizadas no servidor utilizando Express e enviadas prontas para o navegador.

---

# 💾 Armazenamento dos Dados

Os dados são armazenados temporariamente em memória utilizando um array JavaScript.

> ⚠️ Os dados são perdidos sempre que o servidor é reiniciado, pois não há integração com banco de dados.

---

# 🛠️ Tecnologias Utilizadas

## Front-end

- HTML5
- CSS3
- JavaScript
- Bootstrap 5
- Bootstrap Icons

## Back-end

- Node.js
- Express
- EJS
- Express EJS Layouts

---

# 📂 Estrutura do Projeto

```text
LISTA-DE-TAREFAS
│
├── node_modules
│
├── public
│   └── assets
│       ├── css
│       └── js
│
├── src
│   ├── controllers
│   │   ├── listController.js
│   │   └── tarefaController.js
│   │
│   ├── model
│   │   └── listModel.js
│   │
│   ├── views
│   │   ├── layouts
│   │   ├── partials
│   │   ├── criarLista.ejs
│   │   ├── index.ejs
│   │   └── organizarTarefa.ejs
│   │
│   ├── index.js
│   └── routes.js
│
├── .gitattributes
├── LICENSE
├── package-lock.json
├── package.json
└── README.md
```

---

# 🎨 Status das Tarefas

| Status | Descrição |
|----------|----------|
| ✅ OK | Tarefa concluída |
| ⏳ Adiar | Tarefa será realizada posteriormente |
| ❌ Não Fazer | Tarefa cancelada |

---

# 📱 Responsividade

A aplicação foi desenvolvida seguindo a abordagem responsiva para garantir uma boa experiência de uso em:

- Computadores;
- Tablets;
- Smartphones.

Foram utilizadas Media Queries para adaptação do layout em diferentes resoluções de tela.

---

# 🌙 Sistema de Temas

A aplicação permite alternar entre:

- ☀️ Light Mode
- 🌙 Dark Mode

A preferência do usuário é armazenada no **Local Storage**, mantendo o tema selecionado mesmo após atualizar ou fechar o navegador.

---

# 📦 Bibliotecas Utilizadas

## Inicialização do Projeto

```bash
npm init -y
```

## Instalação do Express

```bash
npm install express
```

## Instalação do EJS

```bash
npm install ejs
```

## Instalação do Express EJS Layouts

```bash
npm install express-ejs-layouts
```

---

# 🚀 Como Executar o Projeto

## 1. Clonar o Repositório

```bash
git clone URL_DO_REPOSITORIO
```

## 2. Acessar a Pasta do Projeto

```bash
cd lista-de-tarefas
```

## 3. Instalar as Dependências

```bash
npm install
```

## 4. Executar o Servidor

```bash
node src/index.js
```

## 5. Abrir no Navegador

```text
http://localhost:3000
```

---

# 📌 Melhorias Futuras

- Persistência dos dados em banco de dados;
- Compartilhamento de listas por e-mail;
---

# 📄 Licença

Este projeto está licenciado sob os termos da licença MIT.

Consulte o arquivo `LICENSE` para mais informações.

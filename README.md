# CRUD Challenge

Este é um projeto completo de CRUD desenvolvido como parte de um desafio técnico. O sistema inclui um back-end em Node.js com TypeScript e dois front-ends separados: um usando Material-UI (MUI) e outro usando Ant Design.

---

## Funcionalidades

- **Back-End**:
  - API RESTful desenvolvida com Express e TypeScript.
  - Banco de dados SQLite para armazenamento local.
  - Operações CRUD completas (Create, Read, Update, Delete).

- **Front-End (Material-UI)**:
  - Interface moderna e responsiva com componentes do MUI.
  - Formulário para criar/editar usuários.
  - Tabela para listar usuários com opções de edição e exclusão.

- **Front-End (Ant Design)**:
  - Mesmas funcionalidades do front-end MUI, mas com visual e componentes do Ant Design.
  - Notificações estilizadas para feedback ao usuário.

---

## Estrutura do Projeto
crud-challenge/
├── backend/           # Back-end com Node.js e TypeScript
│   ├── src/
│   │   ├── controllers/
│   │   ├── routes/
│   │   ├── services/
│   │   └── db/
│   ├── index.ts
│   └── server.ts
├── frontend-mui/      # Front-end com Material-UI
│   ├── src/
│   │   ├── components/
│   │   ├── services/
│   │   └── App.tsx
│   └── package.json
├── frontend-antd/     # Front-end com Ant Design
│   ├── src/
│   │   ├── components/
│   │   ├── services/
│   │   └── App.tsx
│   └── package.json
└── README.md          # Documentação do projeto

## Como Executar o Projeto

### Pré-requisitos

- Node.js (v16 ou superior)
- npm ou yarn
- SQLite (não é necessário instalar separadamente, já está incluído no projeto)

### Passos para Executar
1. **Clone o Repositório**:
```
git clone https://github.com/renanmello/crud-challenge.git
```
2. **Navegue até o Diretório**:
```
cd crud-challenge
```
3. **Instale as dependências**:
```
npm install
```
4. **Inicie o Servidor**:
```
npm run dev
```
5. **iniciando o Frontend(MUI)**:
```
cd ../frontend-mui
```
```
npm install
```
```
npm run dev
```
6. **iniciando o Frontend(Ant Design)**:
```
cd ../front-antd
```
```
npm install
```
```
npm run dev
```
## Tecnologias Utilizadas 

    Back-End : 
        Node.js
        TypeScript
        Express
        SQLite
        Axios (para requisições HTTP)
         

    Front-End (Material-UI) : 
        React
        TypeScript
        Material-UI (MUI)
        Axios (para requisições HTTP)
         

    Front-End (Ant Design) : 
        React
        TypeScript
        Ant Design
        Axios (para requisições HTTP)
         
     

## Contribuições 

Contribuições são bem-vindas! Se você deseja melhorar este projeto, sinta-se à vontade para abrir uma issue ou enviar um pull request. 
Autor 

    Nome : Renan Pereira Mello
    E-mail : mellorenan19@gmail.com
     

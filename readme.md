<p align="center">
 <a href="#-sobre-o-projeto">Sobre</a> •
 <a href="#-como-executar-o-projeto">Como executar</a> • 
 <a href="#-autor">Autor</a> • 
</p>


## 💻 Sobre o projeto

 Este projeto foi feito utilizando MongoDB e ExpressJS. A aplicação se utiliza do Docker para subir um banco de dados MongoDB. Além disso existe uma aplicação de frontend em React (next.js) que consome a API rest do backend e mostra uma lista dos veículos cadastrados. O projeto segue com um arquivo JSON para ser importado dentro do [Insomnia](https://insomnia.rest/download) para testar as requests no backend. 

---

## 🚀 Como executar o projeto

### Pré-requisitos

Antes de começar, você precisará ter instaladas em sua máquina as seguintes ferramentas:

- [NodeJs - v14.+](https://nodejs.org/en/)
- [Yarn](https://yarnpkg.com/)
- [Docker](https://www.docker.com/get-started)


### 🎲 Rodando a aplicação
Na pasta raiz do projeto execute os seguintes comandos

```bash

# Estes comandos instalarão as dependências e vão subir o server
yarn # instala as dependencias
docker run --name mongo -p 27017:27017 -v ./data/db/data/db -d mongo mongod # sobe o docker do MongoDB
cd backend && yarn && yarn dev # inicializa o server backend

# o comando abaixo deve ser executado em outra instancia do terminal
cd ../frontend && yarn && yarn dev # inicializa o server do frontend

```

- O backend estará em *http://localhost:4000*
- O frontend estará em *http://localhost:3000*


---

## 🦸 Autor

<a href="https://github.com/fabioprogramadorti">
 <img style="border-radius: 50%;" src="./img/fabio.jpeg" width="100px;" alt=""/>
 <br />
 <sub><b>Fabio Santos</b></sub></a> <a href="https://github.com/fabioprogramadorti" title="Rocketseat">🚀</a>
 <br />

[![Gmail Badge](https://img.shields.io/badge/-fabioprogramadorti@gmail.com-c14438?style=flat-square&logo=Gmail&logoColor=white&link=mailto:fabioprogramadorti@gmail.com)](mailto:fabioprogramadorti@gmail.com)

**_ Todo o desenvolvimento foi realizado na Branch `frontend-lucas-silverio`!! _**

Esse projeto funciona utilizando as seguintes tecnologias:

```
  Node
  Docker
  Docker-compose
  yarn
```

O banco do docker está rodando na porta `5432`, logo, ela precisa estar desocupada para ele rodar ou alterar no arquivo `docker-compose.yml` a porta para que ele possa rodar.

Para iniciar o projeto é necessário ter o Docker aberto e rodar o docker-compose para subir o banco com o comando:

### `sudo docker-compose up`

Assim que o banco estiver rodando é necessário criar a tabela utilizando o comando:

### `yarn prisma migrate dev --name init`

Após o banco estiver funcionando é necessário iniciar o projeto, com o comando:

### `yarn start`

# Burger Queen API com Node - Back-end

## 1. Resumo do projeto

Neste projeto foi criado o back-end da aplicação [Burger Queen](https://burguer-queen-aff2c.web.app/)

O back-end consiste basicamente em um _servidor web_, que é basicamente um programa que _ouve_ o que acontece na aplicação através de uma porta de rede, pela qual podemos enviar _requisições_ (_requests_) e obter _respostas_ (_responses_).

O servidor web _maneja_ as requisições HTTP (GET, POST, PUT e DELETE) recebida e devolve respostas, que serão enviadas de volta ao _cliente_. Quando falamos de _aplicações de servidor_, isso implica uma arquitetura de _cliente/servidor_, onde o cliente é um programa que faz requisições através de uma rede e o servidor é o programa que recebe essas requisições e as responde.

## 2. Como utilizar?

Utilize o [link](https://lab-bq-api.herokuapp.com/) no [Postman](https://www.getpostman.com).


![Products](video.gif)

### Requisições

#### `Products`

* `GET /api/products`
* `GET /api/products/:productid`
* `POST /api/products`
* `PUT /api/products/:productid`
* `DELETE /api/products/:productid`

#### `Orders`

* `GET /api/orders`
* `GET /api/orders/:orderid`
* `POST /api/orders`
* `PUT /api/orders/:orderid`
* `DELETE /api/orders/:orderid`

#### `Tables`

* `GET /api/tables`
* `GET /api/tables/:tableid`
* `POST /api/tables`
* `PUT /api/tables/:tableid`
* `DELETE /api/tables/:tableid`

## 3. Ferramentas utilizadas

1. [Docker](https://www.docker.com/) 
2. [PostgreSQL](https://www.postgresql.org/docs/)
3. [Sequelize](https://sequelize.org)
4. [Express](https://expressjs.com/pt-br/)
5. [Heroku](https://www.heroku.com/home)
6. [Node.js](https://nodejs.org/)
7. [Postman](https://www.getpostman.com)
8. Jest

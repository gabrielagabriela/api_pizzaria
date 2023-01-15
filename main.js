const express = require('express')

const app = express()
const { v4: uuidv4} = require('uuid');

let pizzas = [];
let solicitations = [];
app.use(express.json())

app.get('/pizzas', (request, response) => {
  const nameQuery = request.query.name || ""
  const pizzasFIltered = pizzas.filter(pizza => pizza.name.includes(nameQuery))
  response.json(pizzasFIltered)
})

app.get('/pizzas/:id', (request, response) => {
  const {id} = request.params
  const pizza = pizzas.find(p => p.id == id)
  return response.json(pizza)
})

app.post('/pizzas', (request, response) => {
  const pizza = {
    id: uuidv4(),
    name: request.body.name,
    description: request.body.description,
    price: request.body.price,
    url: request.body.url,
    ingredients: request.body.ingredients
  }
  pizzas.push(pizza)

  response.status(201).json(pizza)})

app.get('/solicitations', (request, response) => {
  response.json(solicitation);
})

app.get('/solicitations/:id', (request, response) => {
  const {id} = request.params
  const solicitation = solicitations.find(solicitation => solicitation.id == id)
  return response.json(solicitation)
})

app.get('/solicitations/name/:name', (request, response) => {
  const {name} = request.params
  const pizzaClient = solicitations.find(solicitation => solicitation.name_client == name)
  return response.json(pizzaClient)
})

app.post('/solicitations', (request, response) => {
  const {name_client, document_client, contact_client, address_client, payment_method, observations, pizzas} = request.body;

  const solicitation = {
    id: uuidv4(),
    name_client,
    document_client,
    contact_client,
    address_client,
    payment_method,
    observations,
    pizzas,
    status: "Em Produção"
  }

  solicitations.push(solicitation)
  response.status(201).json(solicitation);
})


app.listen(5555, ()=> {
  console.log("servidor no ar!")
})
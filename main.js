const express = require('express')

const app = express()
const { v4: uuidv4} = require('uuid');

let pizzas = [];
app.use(express.json())

app.get('/pizzas', (request, response) => {
  const nameQuery = request.query.name || ""
  const pizzasFIltered = pizzas.filter(pizza => pizza.name.includes(nameQuery))
  response.json(pizzasFIltered)
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

app.listen(5555, ()=> {
  console.log("servidor no ar!")
})
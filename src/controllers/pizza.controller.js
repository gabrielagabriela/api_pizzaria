import { v4 as uuidv4} from 'uuid'

export function findMany(request, response){
  const nameQuery = request.query.name || ""
  const pizzasFIltered = pizzas.filter(pizza => pizza.name.includes(nameQuery))
  response.json(pizzasFIltered)
}

export function create(request, response){
  const pizza = {
    id: uuidv4(),
    name: request.body.name,
    description: request.body.description,
    price: request.body.price,
    url: request.body.url,
    ingredients: request.body.ingredients
  }
  pizzas.push(pizza)

  response.status(201).json(pizza)
}
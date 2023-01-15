import { Router} from 'express'
import { findMany, create } from '../controllers/pizza.controller.js';

const pizzasRoutes = Router();


pizzasRoutes.get('/pizzas', findMany) 

pizzasRoutes.post('/pizzas', create)

pizzasRoutes.get('/pizzas/:id', (request, response) => {
  const {id} = request.params
  const pizza = pizzas.find(p => p.id == id)
  return response.json(pizza)
})



export default pizzasRoutes
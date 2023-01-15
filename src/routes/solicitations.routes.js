import { Router} from 'express'
import { create, findMany, findOne } from '../controllers/solicitation.controller.js';

const solicitationsRoutes = Router();

solicitationsRoutes.get('/solicitations', findMany )

solicitationsRoutes.get('/solicitations/:id', findOne)

solicitationsRoutes.get('/solicitations/name/:name', (request, response) => {
  const {name} = request.params
  const pizzaClient = solicitations.find(solicitation => solicitation.name_client == name)
  return response.json(pizzaClient)
})
solicitationsRoutes.post('/solicitations', create)



export default solicitationsRoutes
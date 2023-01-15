import express from 'express'
import { v4 as uuidv4} from 'uuid'
import pizzasRoutes from './src/routes/pizzas.routes.js'
import solicitationsRoutes from './src/routes/solicitations.routes.js';

//let pizzas = [];
//let solicitations = [];
const app = express()
app.use(express.json())
app.use(pizzasRoutes)
app.use(solicitationsRoutes)


app.listen(5555, ()=> {
  console.log("servidor no ar!")
})


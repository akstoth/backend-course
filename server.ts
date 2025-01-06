import express from 'express'
import 'dotenv/config'
import path from 'path'
import { userRoutes } from './routes/user-routes'
import cors from 'cors'

const app = express()
// http://localhost:3333/home.html
//app.use(express.static(path.join(__dirname, 'public')))

// http://localhost:3333/client/home.html
app.use('/client',express.static(path.join(__dirname, 'public')))
app.use(express.json()) // -> aceitará json no cortpo da requisição
app.use(cors()) // -> Permite a funcionalidade com front-end

// Pega valores do .env ou caso não esteja preenchido, o valor seguinte
const url = process.env.API_BASE_URL ?? 'http://localhost'
const port = process.env.API_PORT ?? 3333
/*const users: User[] = [
  {
    id: randomUUID(),
    name: 'Fulano',
    age: 28
},
  {
    id: randomUUID(),
    name: 'Ciclano',
    age: 35
  } 
]*/

app.get('/api', (request, response) => {
  response.send('<h1 style="color: red;">API rodando!</h1>')
  return
})

app.use(userRoutes)

app.listen(port,() => {
  console.log(`Servidor rodando no endereço ${url}:${port}`)
})
import express from 'express'
import path from 'path'
import { read, readFileSync } from 'fs'

// Com o import abaixo, será utilizado o .env do diretório do package.json
import 'dotenv/config'

/*
// Com o import abaixo, preciso definir o caminho com path
import { config } from 'dotenv' 

// Definindo o caminho
config({path: path.join(
  'C:/Users/aleks/Área de Trabalho/Estudos/Ada_Santander/Back_End/Node/.env.example'
)})
*/

interface IUser {
  name: string
  age: number
}
const app = express()
// http://localhost:3333/home.html
//app.use(express.static(path.join(__dirname, 'public')))

// http://localhost:3333/client/home.html
app.use('/client',express.static(path.join(__dirname, 'public')))


// Pega valores do .env ou caso não esteja preenchido, o valor seguinte
const url = process.env.API_BASE_URL ?? 'http://localhost'
const port = process.env.API_PORT ?? 3500
const users: IUser[] = [
  {
    name: 'Fulano',
    age: 28
},
  {
    name: 'Ciclano',
    age: 35
  } 
]

// Precisei deixar o return "isolado": 
// referência -> https://pt.stackoverflow.com/questions/597640/erro-no-overload-matches-this-call
//app.get('/', (request, response) => {
app.get('/', (request, response) => {
  // -> se join(process.cmd(), 'home.html') procurará no mesmo diretório do package.json
  // const homePagePath = path.join(__dirname, 'home.html') 
  // const homePage = readFileSync(homePagePath)
  response.send('<h1 style="color: red;">API rodando!</h1>')
  //response.send(homePage) // ->  envia como um arquivo para baixar
  return
});

app.get('/api/users', (request, response) => {
  response.json(users)
  return
})

app.listen(port,() => {
  console.log(`Servidor rodando no endereço ${url}:${port}`)
})
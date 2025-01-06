import path from 'path'
import {Router} from 'express'
import { randomUUID } from 'crypto'
import dbJson from '../server-db.json' // -> Dois pontos indica diretório acima
import { readFileSync, write, writeFile, writeFileSync } from 'fs'

type User = {
  id: string
  name: string
  age: number
}

type CreateUserDTO = Omit <User, "id"> // -> Recebe User sem id

const dbJsonPath = path.resolve(process.cwd(), './server-db.json')

const users: User[] = dbJson.users

const userRoutes = Router()

userRoutes.get('/api/users', (request, response) => {
  response.send(users)
  return
})

userRoutes.post('/api/users', (request, response) => {
  // Pegamos o corpo da requisição
  const {name, age}: CreateUserDTO = request.body
  if (!name || age < 0){
    //throw new Error('O usuário a ser criado precisa de nome e idade')
    const errMessage = 'O usuário a ser criado precisa de nome e idade!'

    response.status(400).send(errMessage)
    return
  }
  
  const user = {id: randomUUID(), name, age}
  users.push(user)

  writeFileSync(dbJsonPath, JSON.stringify({...dbJson, users}))
  
  response.status(201).json(user)
  return
})

// delete, não precisa ser assíncrono por não ter ainda uma base de dados
userRoutes.delete('/api/users/:id', async (request, response) => {
  const { id } = request.params
  
  if (!id){
    //throw new Error('O usuário a ser criado precisa de nome e idade')
    const errMessage = 'O usuário a ser deletado precisa de um id!'
    response.status(400).send(errMessage)
    return
  }

  const foundUser = users.find(user => user.id ===id)
  if (!foundUser){
    const errMessage = `Usuário com id ${id}, não foi encontrado`
    response.status(400).send(errMessage)
    return
  }

  const updatedUsers = users.filter(user => user.id !== id)

  await writeFile(dbJsonPath, JSON.stringify({...dbJson, users:updatedUsers}), (err) => {
    if (err) {
      response.status(500).send('Error writing to file')
      return
    }
  })
  response.status(204).send()
  return
})

export {userRoutes}
//module.exports {userRoutes} -> Forma antiga (JavaScript?)
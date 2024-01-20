/*
router.get('/', todoCtrl.index) // x i need to test and see that i can make a request to this route and get back a list of valid todos, or an empty array if its empty
router.post('/', todoCtrl.create) // x i need to endure i can create a todo
router.put('/:id', todoCtrl.update) // x i need to ensure that given a valid id and a valid body that I can change an existing todo
router.delete('/:id', todoCtrl.destroy) // x i need to ensure that given a valid id I can destroy a existing todo
router.get('/:id', todoCtrl.show) // x i need to ensure that given a valid id I can see a existing todo
*/
const mongoose = require('mongoose')
const app = require('../app')
const { MongoMemoryServer } = require('mongodb-memory-server')
const request = require('supertest')
const server = app.listen('8080', () => console.log('Lets test'))
const Todo = require('../models/todo')
let mongoServer

beforeAll(async() => {
  mongoServer = await MongoMemoryServer.create()
  await mongoose.connect(mongoServer.getUri())
})

afterAll(async() => {
    await mongoose.connection.close()
    mongoServer.stop()
    server.close()
})



describe('Testing Todo Endpoints For A RESTFUL JSON API', () => {
    test('It should display a list of todos', async () => {
        const todo = new Todo({ title: 'test todo', description: 'test', completed: true })
        await todo.save()

        const response = await request(app).get('/todos')

        expect(response.statusCode).toBe(200)
        expect(Array.isArray(response.body)).toBeTruthy()
        
        for(let i = 0; i < response.body.length; i++){
            expect(response.body[i]).toHaveProperty('title')
            expect(response.body[i]).toHaveProperty('description')
            expect(response.body[i]).toHaveProperty('completed')
            expect(response.body[i]).toHaveProperty('createdAt')
        }
    })
})
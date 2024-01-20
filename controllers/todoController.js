const Todo = require('../models/todo')

/*
200 - good response
  200 - ok
  201 - created
  204 - no content
300 - redirection
  301 - redirect
  302 - redirect
400 - bad response but it was the users fault
    400 - bad request
    401 - unauthorized
    403 - forbidden
    404 - not found
500 - its the servers fault
*/

exports.index = async function index (req, res) {
 // grab all the todos   
 try {
    const todos = await Todo.find({})
    res.status(200).json(todos)
 } catch (error) {
    res.status(400).json({ msg: error.message })
 }
}

exports.create = async function create(req, res) {
// make a new todo
    try {
      const todo = await Todo.create(req.body)
      res.status(200).json(todo)
    } catch (error) {
      res.status(400).json({ msg: error.message })
    }
}

exports.update = async function update(req, res) {
// update a todo that was already made
    try {
    
} catch (error) {
    
}
}

exports.destroy = async function destroy(req, res) {
// delete/destroy an existing todo
    try {
    
} catch (error) {
    
}
}

exports.show = async function show(req, res) {
// show 1 individual todo
    try {
    
} catch (error) {
    
}
}
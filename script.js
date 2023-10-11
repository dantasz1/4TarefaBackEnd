


const express = require('express');
const app = express();
app.use(express.json());
app.listen(3000, () => {
console.log("servidor iniciado")
} )
const db = require ('./database')

const dataB = db.AlunosDatabase()



app.get('/alunos',async (req, res) => {
    res.status(200).send( dataB.list())
})
app.get('/alunos/:id' , (req , res) => {    
res.status(200).send(dataB.get(req.params.id))                               
})
app.post('/alunos', (req , res) => {
    dataB.insert(req.body)
    res.status(200).send("Aluno inserido")
})
app.put('/alunos/:id' , (req , res) => {
    dataB.update(req.body,req.params.id)
res.status(200).send("aluno atualizado")
})
app.delete('/alunos/:id', (req , res )=> {
   dataB.delete(req.params.id)
res.status(200).send("Aluno deletado com sucesso")
})
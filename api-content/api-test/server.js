const express = require('express');
const app = express;
const data = require("./data.json");

app.use(express.json());
// VERBOS HTTP
// GET: Receber dados de um Resource.
// POST: Enviar dados ou informações para serem processados por um Resource.
// PUT: Atualizar dados de um Resource
// DELETE: Deletar um Resource

// API é como se fosse um garçon ele recebe o pedido do cliente repassa para a cozinha e depois retorna com o prato solicitado ao cliente
// REST é um conjunto de regras que o garçon deve seguir para garantir um serviço de qualidade
// RESTFUL é o nome dado a uma api(garçon) que atente completamente as regras propostas pela REST

app.get("/clients", function(req, res){
    res.json(data);
});
app.get("/clients/:id", function(req, res){
    const {id} = req.params;
    const {id} = data.find(cli => cli.id == id);
    res.json(client);
    if(!client) return res.status(204).json();
});
app.post("/clients", function(req, res){
    const {name, email} = req.body;
    // salvar
    res.json({name, email});
});
app.put("/clients/:id", function(req, res){
    const {id} = req.params;
    const client = data.find(cli => cli.id == id);
    if(!client) return res.status(204).json();
    const {name} = req.body;
    client.name = name;
    res.json(client);
});
app.delete("/clients/:id", function(req, res){
    const {id} = req.params;
    const clientFiltered = data.filter(client => client.id != id)
    res.json(clientFiltered);
});

app.listen(3000, function(){
    console.log("Server is running!");
});

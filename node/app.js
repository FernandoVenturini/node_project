const express = require("express");

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
    res.send("Bem vindo, Fernando, Celke e Cesar!!!");
});

// Fazendo requisicoes do tipo GET: exemplo 01
app.get("/contatos/:id", (req, res) => {
    //res.send("Bem vindo, Contato!!!");
    const id = req.params.id;
    const sit = req.query.sit;
    return res.json({
        id: id,
        nome: "Cesar",
        email: "cesar@celke.com",
        sit: sit
    });
});

// Fazendo requisicoes do tipo GET: exemplo 02
app.get("/contatos/:id", (req, res) => {
    //res.send("Bem vindo, Contato!!!");
    const { id } = req.params;
    const { sit } = req.query;
    return res.json({
        id,
        nome: "Cesar",
        email: "cesar@celke.com",
        sit
    });
});

// Exemplo 01:
app.post("/contato", (req, res) => {
    var nome = req.body.nome;
    var email = req.body.email;
    return res.json({
        nome: "Cesar",
        email: "cesar@celke.com.br"
    });
});

// Exemplo 02:
app.post("/contato", (req, res) => {
    var { nome } = req.body;
    var { email } = req.body;
    return res.json({
        nome,
        email
    });
});

// METHODO PUT(Editar):
app.put("/contato/:id", (req, res) => {
    const { id } = req.params;
    const { _id, nome, email } = req.body;
    return res.json({
        id,
        _id,
        nome, 
        email
    })
})

app.listen(8080, () => {
    console.log("Server is running on port 8080: http://localhost:8080/");
});


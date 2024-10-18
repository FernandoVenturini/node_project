const express = require("express");

const app = express();

app.get("/", (req, res) => {
    res.send("Bem vindo!");
});

app.listen(8080, () => {
    console.log("Server is running on port 8080: http://localhost:8080/");
});


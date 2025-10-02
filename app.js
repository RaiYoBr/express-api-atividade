const express = require('express');
const app = express();
const userRoutes = require('./routes/userRoutes');

app.use(express.json()); // permite trabalhar com JSON
app.use('/users', userRoutes); // prefixo das rotas de usuário

app.listen(3000, () => {
  console.log("Servidor rodando na porta 3000");
});

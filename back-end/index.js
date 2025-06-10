const express = require('express');
const cors = require('cors');
const {sequelize} = require('./src/config/configDB');
const cursoRoutes = require('./src/modules/curso/routes/cursoRoutes');
const alunoRoutes = require('./src/modules/aluno/routes/alunoRoutes');
require('dotenv').config();

const app = express();
const port = process.env.PORT;

app.use(cors());
app.use(express.json());

app.use('/cursos', cursoRoutes);
app.use('/alunos', alunoRoutes);

sequelize.sync().then(async ()=>{
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
    app.listen(port, ()=>{
        console.log(`Servidor rodando na porta ${port}`);
    })
})
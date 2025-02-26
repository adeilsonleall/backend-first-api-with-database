import express from 'express'; // Importa o módulo express.
import pool from './servico/conexao.js';
import { retornaCampeonatos } from './servico/retornaCampeonatos.js';

const app = express(); // Cria uma instância do módulo express.


app.get('/campeonatos', async (req, res) => {
    const campeonatos = await retornaCampeonatos();

    res.json(campeonatos);
});

app.listen(9000, async () => {
    const data = new Date();
    console.log("Servidor node iniciado em: "+data);

    const conexao = await pool.getConnection();

    console.log(conexao.threadId);

    conexao.release();
})
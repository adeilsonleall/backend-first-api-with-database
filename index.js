import express from 'express'; // Importa o módulo express.
import pool from './servico/conexao.js'; // Importa a conexão com o banco de dados.
import { retornaCampeonatos } from './servico/retornaCampeonatos.js'; // Importa a função para retornar campeonatos.

const app = express(); // Cria uma instância do módulo express.

app.get('/campeonatos', async (req, res) => { // Define uma rota GET para '/campeonatos'.
    const campeonatos = await retornaCampeonatos(); // Chama a função retornaCampeonatos para obter os campeonatos.
    res.json(campeonatos); // Envia os campeonatos como resposta em formato JSON.
});

app.listen(9000, async () => { // Configura o servidor para ouvir na porta 9000.
    const data = new Date(); // Cria uma nova instância de Date para obter a data atual.
    console.log("Servidor node iniciado em: " + data); // Exibe a data e uma mensagem no console indicando que o servidor foi iniciado.

    const conexao = await pool.getConnection(); // Obtém uma conexão com o banco de dados.
    console.log(conexao.threadId); // Exibe o ID da thread da conexão no console.
    conexao.release(); // Libera a conexão de volta para o pool de conexões.
});

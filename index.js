import express, { query } from 'express'; // Importa o módulo express.
import pool from './servico/conexao.js'; // Importa a conexão com o banco de dados.
import { retornaCampeonatos, retornaCampeonatosID, retornaCampeonatosAno } from './servico/retornaCampeonatos.js'; // Importa a função para retornar campeonatos.

const app = express(); // Cria uma instância do módulo express.

app.get('/campeonatos', async (req, res) => { // Define uma rota GET para '/campeonatos'.
    let campeonatos;

    const ano = req.query.ano;

    if(typeof ano === 'undefined') {
        campeonatos = await retornaCampeonatos();
    } else {
        campeonatos = await retornaCampeonatosAno(parseInt(ano));
    }

    if(campeonatos.length > 0) {
        res.json(campeonatos);
    } else {
        res.status(404).json({mensagem: "Nenhum campeonato encontrado"})
    }
});

app.listen(9000, async () => { // Configura o servidor para ouvir na porta 9000.
    const data = new Date(); // Cria uma nova instância de Date para obter a data atual.
    console.log("Servidor node iniciado em: " + data); // Exibe a data e uma mensagem no console indicando que o servidor foi iniciado.

    const conexao = await pool.getConnection(); // Obtém uma conexão com o banco de dados.
    console.log(conexao.threadId); // Exibe o ID da thread da conexão no console.
    conexao.release(); // Libera a conexão de volta para o pool de conexões.
});

app.get('/campeonatos/:id', async (req, res) => {
    const id = parseInt(req.params.id);

    const campeonato = await retornaCampeonatosID(id);

    if(campeonato.length > 0) {
        res.json(campeonato);
    } else {
        res.status(404).json({mensagem: "Nenhum campeonato encontrado"});
    }
})
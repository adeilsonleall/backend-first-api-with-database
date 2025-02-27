import pool from "./conexao.js"; // Importa o pool de conexões do arquivo conexao.js.

export async function retornaCampeonatos() { // Exporta uma função assíncrona chamada retornaCampeonatos.
    const conexao = await pool.getConnection(); // Obtém uma conexão do pool de conexões.

    const campeonatos_tb = await conexao.query('SELECT id, campeao, vice, ano FROM campeonatos'); // Executa uma consulta SQL que retorna as colunas id, campeao, vice e ano da tabela campeonatos.

    const campeonatos = campeonatos_tb[0]; // Armazena os resultados da consulta na variável campeonatos extraindo apenas os dados das linhas da tabela.

    conexao.release(); // Libera a conexão de volta para o pool de conexões.

    return campeonatos; // Retorna os resultados da consulta.
}

export async function retornaCampeonatosID(id) { // Exporta uma função assíncrona chamada retornaCampeonatosID.
    const conexao = await pool.getConnection(); // Obtém uma conexão do pool de conexões.

    const campeonatos_tb = await conexao.query('SELECT id, campeao, vice, ano FROM campeonatos WHERE id ='+id); // Executa uma consulta SQL que retorna as colunas id, campeao, vice e ano da tabela campeonatos de acordo com o ID especificado.

    const campeonatos = campeonatos_tb[0]; // Armazena os resultados da consulta na variável campeonatos extraindo apenas os dados das linhas da tabela.

    conexao.release(); // Libera a conexão de volta para o pool de conexões.

    return campeonatos; // Retorna os resultados da consulta.
}

export async function retornaCampeonatosAno(ano) { // Exporta uma função assíncrona chamada retornaCampeonatosID.
    const conexao = await pool.getConnection(); // Obtém uma conexão do pool de conexões.

    const campeonatos_tb = await conexao.query('SELECT id, campeao, vice, ano FROM campeonatos WHERE ano ='+ano); // Executa uma consulta SQL que retorna as colunas id, campeao, vice e ano da tabela campeonatos de acordo com o ano especificado.

    const campeonatos = campeonatos_tb[0]; // Armazena os resultados da consulta na variável campeonatos extraindo apenas os dados das linhas da tabela.

    conexao.release(); // Libera a conexão de volta para o pool de conexões.

    return campeonatos; // Retorna os resultados da consulta.
}

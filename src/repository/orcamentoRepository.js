import db from '../db/connection.js'

export async function criarOrcamento(orcamento) {
    const comando = `INSERT INTO tb_orcamento(data_hora, ds_status, descricao, vl_preco_total)
                            VALUES (SYSDATE(), "Pendente", ?, 0)`;

    const resposta = await db.query(comando, [orcamento.status, orcamento.descricao]);
    return resposta[0].insertId;
}


export async function consultarOrcamentos() {
    const comando = `select * from tb_orcamento`;

    const resposta = await db.query(comando);
    return resposta[0];
}

export async function alterarOrcamento(orcamento, id) {
    const comando = `UPDATE tb_orcamento
                            SET ds_status = ?,
                                descricao = ?
                            WHERE id_orcamento = ?`;

    const resposta = await db.query(comando, [orcamento.status, orcamento.descricao, id]);
    return resposta[0].affectedRows;
}

export async function alterarPrecoTotal(id) {
    const comando = `UPDATE tb_orcamento O
	                    JOIN (
		                    SELECT SO.id_orcamento, SUM(S.preco) as valorTotal 
                            FROM tb_servicos_orcamento SO
		                    JOIN tb_servico S ON S.id = SO.id_servico
                            GROUP BY SO.id_orcamento
	                    ) AS total ON O.id = total.id_orcamento
		                    SET O.vl_preco_total = total.valorTotal
			                    WHERE O.id = ?`;

    const resposta = await db.query(comando, [id]);
    return resposta[0].affectedRows;
}
import db from '../db/connection.js'

export async function criarOrcamento(orcamento){
    const comando = `INSERT INTO tb_orcamento(dt_horario, ds_status, descricao, vl_preco_total)
                            VALUES (SYSDATE(), ?, ?, 0)`;

    const resposta = await db.query(comando, [orcamento.status, orcamento.descricao]);
    return resposta[0].insertId;
}


export async function consultarOrcamentos(){
    const comando = `select * from tb_orcamento`;

    const resposta = await db.query(comando);
    return resposta[0];
}

export async function alterarOrcamento(orcamento, id){
    const comando = `UPDATE tb_orcamento
                            SET ds_status = ?,
                                descricao = ?
                            WHERE id_orcamento = ?`;

    const resposta = await db.query(comando, [orcamento.status, orcamento.descricao, id]);
    return resposta[0].affectedRows;
}
const {Responsavel, Tarefa} = require("../models");

exports.listarTarefas = async (req, res)=>{
    try{
        const tarefas = await Tarefa.findAll({
            include: [
                {
                    model: Responsavel,
                    as: 'responsavel'
                }
            ],
        });

        if(tarefas.length > 0){
            return res.status(200).json(tarefas);
        }
        return res.status(404).json({
            "mensagem":"Nenhuma tarefa encontrada"
        });
    }catch(error){
        return res.status(500).json({
            mensagem: "Erro interno do servidor",
            erro: error.message
        });
    }
}

/*
exports.listarTarefas=(req, res)=>{
    return res.status(200).json({
        sucesso: true,
        dados: dbTarefa
    });
}
    */


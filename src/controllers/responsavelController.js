const {Responsavel, Tarefa} = require("../models");


exports.listarResponsaveis = async (req, res)=>{
    try{
        const responsaveis = await Responsavel.findAll({
            include: [
                {
                    model: Tarefa,
                    as: 'tarefas'
                }
            ],
            attributes: {exclude:['senha']}
        });
        if(responsaveis.length > 0){
            return res.status(200).json(responsaveis);
        } 
        return res.status(404).json({
            "mensagem": "Nenhum responsável encontrado"
        });
    }catch(error){
        return res.status(500).json({
            mensagem: "Erro interno do servidor",
            erro: error.message
        });
    }
    /*
    return res.status(200).json({
        sucesso: true,
        dados: dbTarefa
    });
    */
}


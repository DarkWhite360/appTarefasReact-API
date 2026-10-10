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

exports.cadastrarTarefa = async(req,res)=>{
    try{
        const{titulo, descricao, observacao, preco, prioridade, dataLimite, status, id_responsavel} = req.body;

        if(!titulo || !descricao || !prioridade || !id_responsavel){
            return res.status(400).json({
                mensagem: "Os campos [titulo, descricao, prioridade e responsável] são obrigatórios",
            })
        } 

        if(id_responsavel){
            const responsavelExiste = await Responsavel.findByPk(id_responsavel);
            
            if(!responsavelExiste){
                return res.status(404).json({
                    mensagem: "Responsavel não cadastrado",
                })
            }
        }

        const novaTarefa = await Tarefa.create(req.body);

        const tarefaCriada = await Tarefa.findByPk(novaTarefa.id, {
            include: [
                {
                    model: Responsavel,
                    as: 'responsavel',
                    attributes: {exclude:['senha']}
                }
            ]
        });
        return res.status(201).json({
            mensagem: "Tarefa criada com sucesso!!!",
            tarefa: tarefaCriada
        })



    }catch(error){
        return res.status(500).json({
            mensagem:"Erro ao criar tarefa",
            erro: error.message
        })
    }
}




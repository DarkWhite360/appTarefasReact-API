const bcrypt = require('bcrypt');

const { Responsavel, Tarefa } = require("../models");


exports.listarResponsaveis = async (req, res) => {
    try {
        const responsaveis = await Responsavel.findAll({
            include: [
                {
                    model: Tarefa,
                    as: 'tarefas'
                }
            ],
            attributes: { exclude: ['senha'] }
        });
        if (responsaveis.length > 0) {
            return res.status(200).json(responsaveis);
        }
        return res.status(404).json({
            "mensagem": "Nenhum responsável encontrado"
        });
    } catch (error) {
        return res.status(500).json({
            mensagem: "Erro interno do servidor",
            erro: error.message
        });
    }
}
exports.criarResponsavel = async (req, res) => {
    try {
        const { nome, email, telefone, senha, foto, cargo, status, departamento } = req.body;

        if (!nome || !email || !senha) {
            return res.status(400).json({
                mensagem: "Os campos 'nome', 'email', 'senha', são obrigatórios."
            });
        }

        const salto = await bcrypt.genSalt(10);
        const senhaHash = await bcrypt.hash(senha, salto)

        const novoResponsavel = await Responsavel.create({
            nome,
            email,
            telefone: telefone || null,
            senha: senhaHash,
            foto: foto || null,
            cargo: cargo || null,
            status: status || null,
            departamento: departamento || null
        });
        novoResponsavel.senha = undefined;
        return res.status(201).json({
            mensagem: "Responsável criado com sucesso!",
            responsavel: novoResponsavel
        });

    } catch (error) {
        console.error('Erro ao criar responsável:', error);
        return res.status(500).json({ mensagem: "Erro interno do servidor", erro: error.message });
    }
}
exports.login = async (req, res) => {
    try {
        const { email, senha } = req.body;

        if (!email || !senha) {
            return res.status(400).json({
                mensagem: "Os campos 'email' e 'senha' são obrigatórios!"
            })
        }
        const responsavel = await Responsavel.findOne({ where: { email } });

        if (!responsavel) {
            return res.status(404).json({
                mensagem: "E-mail não cadastrado!"
            })
        }
        const senhaValida = await bcrypt.compare(senha, responsavel.senha);

        if (!senhaValida) {
            return res.status(404).json({
                mensagem: "Senha incorreta!!"
            })
        }
        responsavel.senha = undefined;

        return res.status(201).json({
            mensagem: "Login realizado com sucesso!",
            responsavel: responsavel
        });
        
    } catch (error) {
        console.error('Erro ao criar responsável:', error);
        return res.status(500).json({ mensagem: "Erro interno do servidor", erro: error.message });
    }
}
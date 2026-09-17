const {DataTypes} = require('sequelize');
const Responsavel = require('./Responsavel');

module.exports = (sequelize)=> {
    return sequelize.define("Tarefa",
        {
            /*id:{
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },*/
            titulo:{
                type: DataTypes.STRING(150),
                allowNull: false
            },
            descricao:{
                type: DataTypes.TEXT,
                allowNull: false
            },
            observacao:{
                type: DataTypes.STRING(250),
                allowNull: true
            },
            preco: {
                type: DataTypes.DECIMAL(10,2),
                allowNull: true,
                toDefaultValue: 0.00
            },
            prioridade:{
                type: DataTypes.ENUM("ALTA", "MÉDIA", "BAIXA"),
                allowNull: false
            },
            dataLimite:{
                type: DataTypes.DATE,
                allowNull: true
            },
            status:{
                type: DataTypes.ENUM("PENDENTE", "EM_ANDAMENTO", "CONCLUIDO"),
                allowNull: false,
                toDefaultValue: 'PENDENTE'
            },

            /*data_criacao:{
                type: DataTypes.DATEONLY,
                allowNull: false
            },
            data_atualizacao:{
                type: DataTypes.DATEONLY,
                allowNull: false
            }*/
        },
        {
            tableName: "tarefas",
            timestamps: true
        }
    );
};
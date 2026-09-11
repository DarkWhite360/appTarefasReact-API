const {DataTypes} = require('sequelize');

module.exports = (sequelize)=> {
    return sequelize.define("Tarefa",
        {
            id:{
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            titulo:{
                type: DataTypes.STRING(150),
                allowNull: false
            },
            descricao:{
                type: DataTypes.TEXT,
                allowNull: false
            },
            status:{
                type: DataTypes.ENUM("PENDENTE", "EM_ANDAMENTO", "CONCLUIDO"),
                allowNull: false,
                defaultValue: 'PENDENTE'
            },
            data_criacao:{
                type: DataTypes.DATEONLY,
                allowNull: false
            },
            data_atualizacao:{
                type: DataTypes.DATEONLY,
                allowNull: false
            }
        },
        {
            tableName: "tarefas",
            timestamps: false
        }
    );
};
const {DataTypes} = require('sequelize');

module.exports = (sequelize)=> {
    return sequelize.define("Responsavel",
        {
            /*id:{
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },*/
            nome:{
                type: DataTypes.STRING(150),
                allowNull: false
            },
            email:{
                type: DataTypes.STRING(150),
                allowNull: false
            },
            telefone:{
                type: DataTypes.STRING(20),
                allowNull: true
            },
            senha:{
                type: DataTypes.STRING(100),
                allowNull: false 
            },
            foto:{
                type: DataTypes.STRING,
                allowNull: true
            },
            cargo:{
                type: DataTypes.ENUM("DEV_BACKEND", "DEV_FRONTEND", "MANAGER", "QA", "OUTRO"),
                allowNull: true,
                toDefault: 'OUTRO'
            },
            status:{
                type: DataTypes.ENUM("ATIVO", "INATIVO"),
                allowNull: true
            },
            departamento:{
                type: DataTypes.ENUM("TI", "FINANCEIRO", "RH", "ADMINISTRATIVO", "OUTRO"),
                allowNull: true
            }
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
            tableName: 'responsaveis',
            timestamps: true
        }
    );
};
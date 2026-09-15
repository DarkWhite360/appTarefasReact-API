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
                allowNull: true
            },
            telefone:{
                type: DataTypes.STRING(20),
                allowNull: true
            },
            senha:{
                type: DataTypes.STRING(100),
                allowNull: true 
            },
            foto:{
                type: DataTypes.STRING,
                allowNull: true
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
            tableName: 'responsaveis',
            timestamps: true
        }
    );
};
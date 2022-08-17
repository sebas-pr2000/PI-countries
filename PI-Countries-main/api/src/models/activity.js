const {DataTypes} = require("sequelize");

module.exports= (sequelize) =>{
    sequelize.define("activity",{
        ID:{
            type: DataTypes.UUID,
            defaultValue : DataTypes.UUIDV4,
            primaryKey:  true
        },
        name:{
            type: DataTypes.STRING
        },
        difficulty: {
            type: DataTypes.INTEGER,
            validate:{
                min:1,
                max:5
            }
        },
        duration:{
            type:DataTypes.INTEGER,
        },
        season:{
            type: DataTypes.ENUM("primavera", "verano", "otoño", "invierno")
        }
    },{
        timestamps: false
    }
    )
}
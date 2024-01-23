import { Model, DataTypes, Sequelize } from 'sequelize'

const USER_TABLE = 'users';

export const UserSchema = {
    id:{
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
    },
    first_name:{
        allowNull: false,
        type: DataTypes.STRING
    },
    second_name:{
        allowNull: false,
        type: DataTypes.STRING
    },
    email:{
        allowNull: false,
        unique: true,
        type: DataTypes.STRING
    },
    avatar:{
        allowNull: false,
        type: DataTypes.STRING
    },
    createAt:{
        allowNull: false,
        type: DataTypes.DATE,
        field: 'create_at',
        defaultValue: Sequelize.NOW
    }
}

export class User extends Model {
    static associate(){
        // models
    }

    static config(sequelize){
        return{
            sequelize,
            tableName: USER_TABLE,
            modelName: 'User',
            timestamps: false
        }
    }
}
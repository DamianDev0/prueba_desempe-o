//Importamos los decoradores que nos ayudaran en la creacion de nuestra tabala Products en nuestra base de datos

import { 
    Table,
    Column, 
    Model, 
    DataType, 
    PrimaryKey, 
    AutoIncrement,
    BelongsTo,
    ForeignKey,
    HasMany
} from "sequelize-typescript";
import {  User } from "./userModel";
import { ProductCart} from "./productCartModel";

@Table({
    tableName: 'cart',
    timestamps: false
})
export class Cart extends Model {
    @PrimaryKey
    @AutoIncrement
    @Column({
        type: DataType.INTEGER
    })
    id!: number;

    @ForeignKey(() => User)
    @Column({
        type: DataType.INTEGER,
        allowNull: false
    })
    userId!: number

    @BelongsTo(() => User)
    user!:  User

    @HasMany(() => ProductCart)
    productCart!: ProductCart[] 
}
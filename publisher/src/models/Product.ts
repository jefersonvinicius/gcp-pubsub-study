import { DataTypes, Model, Optional, Sequelize } from 'sequelize';

interface ProductAttrs {
  id: number;
  name: string;
  price: number;
}

interface ProductCreationAttrs extends Optional<ProductAttrs, 'id'> {}

export class Product extends Model<ProductAttrs, ProductCreationAttrs> implements ProductAttrs {
  id!: number;
  name!: string;
  price!: number;

  readonly createdAt!: Date;
  readonly updatedAt!: Date;

  static initialize(sequelize: Sequelize) {
    this.init(
      {
        id: {
          type: DataTypes.INTEGER,
          primaryKey: true,
        },
        name: {
          type: DataTypes.STRING,
        },
        price: {
          type: DataTypes.DECIMAL,
        },
      },
      {
        tableName: 'products',
        sequelize,
        underscored: true,
      }
    );
  }
}

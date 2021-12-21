import { DataTypes, Model, Optional, Sequelize } from 'sequelize';

export interface ProductAttrs {
  id: number;
  name: string;
  price: number;
}

interface ProductCreationAttrs extends Optional<ProductAttrs, 'id'> {}

export class Product extends Model<ProductAttrs, ProductCreationAttrs> implements ProductAttrs {
  id!: number;
  name!: string;
  price!: number;
  synced!: boolean;
  syncedAt!: Date;

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

  toModelView(): ProductAttrs {
    return {
      id: this.id,
      name: this.name,
      price: this.price,
    };
  }
}

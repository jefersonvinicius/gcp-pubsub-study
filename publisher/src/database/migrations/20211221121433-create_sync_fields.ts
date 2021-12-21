import { DataTypes, QueryInterface } from 'sequelize';

export async function up(queryInterface: QueryInterface) {
  return Promise.all([
    queryInterface.addColumn('products', 'synced', { type: DataTypes.BOOLEAN, defaultValue: false }),
    queryInterface.addColumn('products', 'synced_at', { type: DataTypes.DATE, allowNull: true }),
  ]);
}

export async function down(queryInterface: QueryInterface) {
  return Promise.all([
    queryInterface.removeColumn('products', 'synced'),
    queryInterface.removeColumn('products', 'synced_at'),
  ]);
}

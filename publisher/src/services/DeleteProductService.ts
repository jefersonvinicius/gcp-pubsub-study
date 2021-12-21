import { Product } from '../models/Product';

type DeleteProductRequest = {
  id: number;
};

export class DeleteProductService {
  static async execute(request: DeleteProductRequest): Promise<void> {
    const product = await Product.findByPk(request.id);
    if (!product) throw Error('Product not found');

    await product.destroy();
  }
}

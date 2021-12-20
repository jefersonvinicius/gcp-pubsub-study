import { Product } from '../models/Product';

type CreateProductRequest = {
  name: string;
  price: number;
};

export class CreateProductService {
  static async execute(request: CreateProductRequest): Promise<Product> {
    const product = await Product.create({
      name: request.name,
      price: request.price,
    });
    return product;
  }
}

import { Product } from '../models/Product';

type GetProductsRequest = {
  offset: number;
  limit: number;
};

type GetProductsResponse = {
  products: Product[];
  total: number;
};

export class GetProductsService {
  static async execute(request: GetProductsRequest): Promise<GetProductsResponse> {
    const result = await Product.findAndCountAll({
      limit: request.limit,
      offset: request.offset,
    });

    return {
      products: result.rows,
      total: result.count,
    };
  }
}

import { Request, Response } from 'express';
import { getPaginationParams } from '../helpers/http';
import { Product } from '../models/Product';
import { GetProductsService } from '../services/GetProductsService';

export class RenderProductsListing {
  async handle(request: Request, response: Response) {
    const pagination = getPaginationParams(request);
    const result = await GetProductsService.execute(pagination);

    const currentTotal = pagination.offset + result.products.length;

    return response.render('products-listing', {
      products: result.products.map((p) => p.toModelView()),
      total: result.total,
      currentTotal,
      allProductsLoaded: currentTotal === result.total,
      ...pagination,
    });
  }
}

export default new RenderProductsListing();

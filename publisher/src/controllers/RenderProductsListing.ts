import { Request, Response } from 'express';
import { getPaginationParams } from '../helpers/http';
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
      nextOffset: pagination.offset + pagination.limit,
      previousOffset: pagination.offset ? pagination.offset - pagination.limit : 0,
      ...pagination,
    });
  }
}

export default new RenderProductsListing();

import { Request, Response } from 'express';

export class RenderCreateProduct {
  handle(request: Request, response: Response) {
    const message = request.flash('create-product-message');
    return response.render('create-product', { message });
  }
}

export default new RenderCreateProduct();

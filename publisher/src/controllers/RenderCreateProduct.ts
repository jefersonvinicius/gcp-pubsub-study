import { Request, Response } from 'express';

export class RenderCreateProduct {
  handle(request: Request, response: Response) {
    const successMessage = request.flash('product-success-message');
    const errorMessage = request.flash('product-error-message');
    return response.render('create-product', { successMessage, errorMessage });
  }
}

export default new RenderCreateProduct();

import { Request, Response } from 'express';

export class CreateCreateProduct {
  handle(request: Request, response: Response) {
    request.flash('create-product-message', 'Produto criado com sucesso!');
    return response.redirect('/');
  }
}

export default new CreateCreateProduct();

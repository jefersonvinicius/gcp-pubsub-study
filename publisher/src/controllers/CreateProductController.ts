import { Request, Response } from 'express';
import { CreateProductService } from '../services/CreateProductService';

export class CreateCreateProduct {
  async handle(request: Request, response: Response) {
    try {
      await CreateProductService.execute({
        name: request.body.name,
        price: request.body.price,
      });
      request.flash('create-product-message', 'Produto criado com sucesso!');
    } catch (error: any) {
      request.flash('create-product-message', 'Erro ao criar produto: ' + error?.message);
    }
    return response.redirect('/');
  }
}

export default new CreateCreateProduct();

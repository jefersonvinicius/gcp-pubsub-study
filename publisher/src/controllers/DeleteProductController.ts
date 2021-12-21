import { Request, Response } from 'express';
import { CreateProductService } from '../services/CreateProductService';
import { DeleteProductService } from '../services/DeleteProductService';

export class DeleteProductController {
  async handle(request: Request, response: Response) {
    try {
      await DeleteProductService.execute({ id: Number(request.params.id) });
      return response.redirect('back');
    } catch (error: any) {
      return response.send(String(error));
    }
  }
}

export default new DeleteProductController();

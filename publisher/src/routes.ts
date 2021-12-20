import { Router } from 'express';
import CreateProductController from './controllers/CreateProductController';
import RenderCreateProduct from './controllers/RenderCreateProduct';

const routes = Router();

routes.get('/', RenderCreateProduct.handle);
routes.post('/products', CreateProductController.handle);

export default routes;

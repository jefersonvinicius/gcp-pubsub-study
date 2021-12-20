import { Router } from 'express';
import { EndpointsPaths } from './config/endpoints';
import CreateProductController from './controllers/CreateProductController';
import RenderCreateProduct from './controllers/RenderCreateProduct';

const routes = Router();

routes.get(EndpointsPaths.RenderProductForm, RenderCreateProduct.handle);
routes.post(EndpointsPaths.CreateProduct, CreateProductController.handle);

export default routes;

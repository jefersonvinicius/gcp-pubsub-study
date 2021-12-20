import { Router } from 'express';
import { EndpointsPaths } from './config/endpoints';
import CreateProductController from './controllers/CreateProductController';
import RenderCreateProduct from './controllers/RenderCreateProduct';
import RenderProductsListing from './controllers/RenderProductsListing';

const routes = Router();

routes.get(EndpointsPaths.RenderProductForm, RenderCreateProduct.handle);
routes.get(EndpointsPaths.RenderProducts, RenderProductsListing.handle);
routes.post(EndpointsPaths.CreateProduct, CreateProductController.handle);

export default routes;

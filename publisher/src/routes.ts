import { Router } from 'express';
import { EndpointsPaths } from './config/endpoints';
import CreateProductController from './controllers/CreateProductController';
import DeleteProductController from './controllers/DeleteProductController';
import RenderCreateProduct from './controllers/RenderCreateProduct';
import RenderProductsListing from './controllers/RenderProductsListing';

const routes = Router();

routes.get(EndpointsPaths.RenderProductForm, RenderCreateProduct.handle);
routes.get(EndpointsPaths.RenderProducts, RenderProductsListing.handle);
routes.post(EndpointsPaths.CreateProduct, CreateProductController.handle);
routes.delete(EndpointsPaths.DeleteProduct, DeleteProductController.handle);

export default routes;

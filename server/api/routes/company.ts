import { Router } from 'express';
import CompanyController from '../controller/CompanyController';

const companyRouter = Router();
const controller = new CompanyController();

companyRouter.get('/', controller.getCompanies);
companyRouter.get('/:id', controller.getCompany);
companyRouter.post('/', controller.addCompany);
companyRouter.put('/:id', controller.updateCompany);
companyRouter.delete('/:id', controller.deleteCompany);
companyRouter.post('/:id/founder', controller.addFounder);

export default companyRouter;

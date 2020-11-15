import { Router } from 'express';
import FounderController from '../controller/FounderController';

const founderRouter = Router();
const controller = new FounderController();

founderRouter.get('/', controller.getFounders);
founderRouter.get('/:id', controller.getFounder);
founderRouter.post('/', controller.addFounder);

export default founderRouter;

import { Router } from 'express';
import TasksController from './controllers/tasksController';

const routes = Router();

const tasksController = new TasksController();

routes.get('/tasks', tasksController.list);
routes.post('/tasks', tasksController.create);
routes.get('/tasks/:id', tasksController.show);
routes.put('/tasks/:id', tasksController.update);
routes.delete('/tasks/:id', tasksController.delete);

export default routes;
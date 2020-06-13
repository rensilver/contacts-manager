import express, { Request, Response } from 'express';
import * as contactController from '../controllers/contactController';

const routes = express.Router();

routes.get('/', (req: Request, res: Response) => {
    res.send("Hello World");
});

routes.get('/contacts', contactController.allContacts);
routes.get('/contacts/:id', contactController.showContact);
routes.post('/contacts', contactController.addContact);
routes.put('/contacts/:id', contactController.updateContact);
routes.delete('/contacts/:id', contactController.deleteContact);

export default routes;
import express, { Application } from 'express';
import routes from './routes';
import connect from './connect';

const app: Application = express();
const port: number = 3000;
const db: string = 'mongodb://127.0.0.1:27017/mycontacts';

connect(db);

app.use(express.json());
app.use(routes);

app.listen(port, () => {
    console.log(`Server running on ${port}`);
});
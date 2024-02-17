import express from 'express'
import {sequelize} from "./db";
import {personsRouter} from "./persons/routes";
import {documentsRouter} from "./documents/routes";

const app = express();
const port = 8000;

app.use(express.json());

app.use('/persons', personsRouter);
app.use('/documents', documentsRouter);

sequelize.sync().then(() => {
    app.listen(port, () => {
        console.log(`Listening at ${port}.`)
    })
});

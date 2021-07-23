import express from 'express';
import { urlencoded } from 'body-parser';
import mongoose from 'mongoose';
import Router from './apiRoutes';
import cors from 'cors';

const app = express();
app.use(urlencoded({
    extended: true
}));
// app.use(json());
app.use(cors());

const dbPath = 'mongodb://localhost/my-app';
const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    keepAlive: true,
    keepAliveInitialDelay: 300000,
    useCreateIndex: true,
    useFindAndModify: false
};
mongoose.connect(dbPath, options);

app.get('/', (req, res) => {
    res.json({
        message: 'Hello World!'
    })
});

app.use('/api', Router);

const port = 4000;
app.listen(port, () => {
    console.log(`Server listening at port ${port}`)
});
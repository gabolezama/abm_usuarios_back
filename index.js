import express from 'express';
import cors from 'cors';
import routerApi from './routes/index.js';

const app = express();
const port = 4000;

app.use(express.json());

const whitelist = ['http://localhost:3000'];
const options = {
    origin: (origin, callback) => {
      if (whitelist.includes(origin) || !origin) {
        callback(null, true);
      } else {
        callback(new Error('no permitido'));
      }
    }
  }
app.use(cors(options));

app.get('/', (req, res) => {
    res.send('Hola mi server en express');
});

routerApi(app);

app.listen(port, () => {
    console.log('Mi port: ' +  port);
});
import express, { Request, Response, NextFunction } from 'express';
import config from './config';
import routes from './api/routes';

const app = express();

//라우터
app.use('/api', routes);

app.listen(config.port, () => {
    console.log(`
  ################################################
  🛡️  Server listening on port: ${config.port} 🛡️
  ################################################
`);
});

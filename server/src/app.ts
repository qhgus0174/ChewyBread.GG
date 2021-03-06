import express from 'express';
import config from './config';
import routes from './api/routes';

const app = express();

//라우터
app.use('/', routes);

app.listen(config.port, () => {
    console.log(`
  ################################################
  🛡️  Server listening on port: ${config.port} 🛡️
  ################################################
`);
});

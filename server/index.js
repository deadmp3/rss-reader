import 'babel-polyfill';

import Koa from 'koa';
import Router from 'koa-router';
import bodyParser from 'koa-bodyparser';
import serve from './middlewares/serve';
import addRoutes from './routes';

export default () => {
  const app = new Koa();

  app.use(bodyParser());
  app.use(serve());

  const router = new Router();
  addRoutes(router);
  app.use(router.allowedMethods());
  app.use(router.routes());

  return app;
};

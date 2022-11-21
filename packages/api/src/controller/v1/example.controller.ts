import { ParameterizedContext } from 'koa';
import Router from 'koa-router';

const route = ['/example'];
const router: Router = new Router();

/************************************************
 * routes
 ************************************************/

/************************** user **************************/

router.get('/', async (ctx: ParameterizedContext) => {
  ctx.body = 'Hello World!';
}); // {get} /

export { router, route };

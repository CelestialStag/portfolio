import Koa, { Context, Next, ParameterizedContext } from 'koa';
import Body from 'koa-body';
import CORS from '@koa/cors';
import KoaJSON from 'koa-json';
import KoaLogger from 'koa-logger';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime';
import Router from 'koa-router';
import fs from 'fs';
import websockify from 'koa-websocket';

import { CLIENT_ERROR, HTTP_RESPONSE_TYPE, SERVER_ERROR } from '@lib/utility';
import { api_config } from '@lib/config';

/************************************************
 * functions
 ************************************************/

const create_data_dir = () => {
  //? create directory if not exists
  //! does not check for permissions
  if (!fs.existsSync(api_config.data_dir)) fs.mkdirSync(api_config.data_dir, { recursive: true });
  console.log(`[data_dir]: ${api_config.data_dir}`);
}; // create_data_dir

/************************************************
 * setup
 ************************************************/

const base_server: Koa = new Koa();
const server = websockify(base_server);

/************************************************
 * middleware
 ************************************************/

// NOTE: middleware - cors
server.use(
  CORS({
    origin: '*',
    credentials: true,
  }),
);

// NOTE: middleware - body
server.use(
  Body({
    formidable: {
      maxFileSize: api_config.max_bytes,
      uploadDir: api_config.data_dir,
      multiples: false,
    },
    multipart: true,
    urlencoded: true,
  }),
);

// NOTE: middleware - JSON formatter
server.use(KoaJSON({ pretty: false, param: 'pretty' }));

// NOTE: middleware - logger
if (api_config.print_errors) server.use(KoaLogger());

// NOTE: middleware - errors
server.use(async (ctx: Context, next: Next) => {
  try {
    return await next();
  } catch (e: unknown) {
    // TODO: log errors to persistent location
    if (api_config.print_errors) console.log(e as Error);
    const error: HTTP_RESPONSE_TYPE = e as HTTP_RESPONSE_TYPE;
    if (e instanceof PrismaClientKnownRequestError && e.code === 'P2002') {
      if (api_config.print_errors) console.log(e.meta);
      ctx.status = CLIENT_ERROR.CONFLICT.status;
      ctx.body = CLIENT_ERROR.CONFLICT.message;
    } else {
      ctx.status = error.status ?? SERVER_ERROR.INTERNAL.status;
      if (error.status) {
        ctx.body = error.status ? error.message : SERVER_ERROR.INTERNAL.message;
      } else {
        ctx.body = error.message ?? SERVER_ERROR.INTERNAL.message;
      }
      if (typeof ctx.body === 'string') ctx.set('Content-Type', 'text/plain');
    }
  }
});

/************************************************
 * routing
 ************************************************/

(async () => {
  const router: Router = new Router();
  const socket_router = new Router();
  // router.use(`${api_config.env === 'development' ? `/api` : ``}/v1/auth`, SessionController.router.routes());
  /** not auth route */
  // if (!(version === 'auth')) {
  // }
  const versions = fs.readdirSync(`${__dirname}/controller/`);
  for (const version of versions) {
    const version_router: Router = new Router();
    try {
      const modules = fs
        .readdirSync(`${__dirname}/controller/${version}/`)
        .reduce((a, x) => (x.match(/((controller\.ts)|(controller\.js))$/) ? [...a, x] : a), [] as string[]);
      for (const module of modules) {
        const { route: route_, router: router_ } = await import(`${__dirname}/controller/${version}/${module}`);
        version_router.use(route_, router_.routes());
        if (api_config.print_errors) console.log(`module: [success] ${version}/${module}`);
      }
      router.use(`${api_config.env === 'development' ? `/api` : ``}/${version}`, version_router.routes());
    } catch (e) {
      if (api_config.print_errors) console.log(e);
      if (api_config.print_errors) console.log(`module: [fail] ${version}/${module}`);
    }
  }

  socket_router.all('', async (ctx: ParameterizedContext) => {
    ctx.websocket.on('message', (message: string) => {
      message === 'ping' ? ctx.websocket.send('pong!') : null;
    });
  });

  server.use(router.routes());
  server.ws.use(socket_router.routes() as unknown as Koa.Middleware);

  /************************************************
   * run app
   ************************************************/

  server.listen(api_config.api_port, async () => {
    console.log(`[print-errors]: ${api_config.print_errors}`);
    console.log(`[env]: ${server.env}`);

    create_data_dir();

    // await connect_prisma();
    // await connect_mongo();
    // await connect_redis();
    // await connect_meili();

    server.env = api_config.env;
    console.log(
      `[listening]: ${
        api_config.env === 'development' ? `http://localhost:${api_config.api_port}` : `https//${api_config.api_host}`
      }`,
    );
  });
})();

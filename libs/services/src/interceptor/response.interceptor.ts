import { ParameterizedContext } from 'koa';

export const ResponseInterceptor = async (ctx: ParameterizedContext, next: () => Promise<void>) => {
  await next();
};

import { Next, ParameterizedContext } from 'koa';
import { IMiddleware } from 'koa-router';
import Joi from 'joi';

import { CLIENT_ERROR } from '@lib/utility';
import { validateSchema } from '@lib/shared';

export type SchemaContext<T = { [key: string]: unknown }> = {
  body: T;
};

export const SchemaResolver = <T = unknown>(Schema: Joi.ObjectSchema): IMiddleware<SchemaContext<T>> => {
  return async (ctx: ParameterizedContext<SchemaContext<T>>, next: Next) => {
    const { value, error } = validateSchema<T>(
      Schema,
      (ctx.request as unknown as { body: Record<string, unknown> }).body,
      {
        allowUnknown: false,
        abortEarly: false,
        errors: { escapeHtml: true },
      },
    );
    if (error || !value) {
      ctx.status = CLIENT_ERROR.BAD_REQUEST.status;
      ctx.body = error;
      return;
    }
    ctx.state = {
      ...ctx.state,
      body: value,
    };
    (ctx.request as unknown as { body: T | null }).body = value;
    await next();
  };
};

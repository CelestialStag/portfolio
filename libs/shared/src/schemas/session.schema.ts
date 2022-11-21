import Joi from 'joi';

/************************************************
 * session
 ************************************************/

export const JUserAuthSchema = Joi.object({
  email: Joi.string().max(64).email({ tlds: false }).trim().lowercase().required(),
  password: Joi.string().min(8).max(64).trim().required(),
});

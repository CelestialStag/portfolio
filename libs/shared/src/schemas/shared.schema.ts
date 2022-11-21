import Joi from 'joi';

/************************************************
 * shared
 ************************************************/

export const JIdSchema = Joi.object({
  id: Joi.number().min(1).required(),
});

export const JIdRelationSchema = Joi.object({
  id: Joi.number().min(1).required(),
  relation: Joi.number().min(1).required(),
});

export const JUidSchema = Joi.object({
  uid: Joi.string().min(0).max(24).required(),
});

export const JCodeSchema = Joi.object({
  uid: Joi.string().min(0).max(16).required(),
});

export const JSlugSchema = Joi.object({
  slug: Joi.string().min(1).max(128).required(),
});

export const JStatusSchema = Joi.object({
  status: Joi.number().min(0).required(),
});

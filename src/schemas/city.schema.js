import Joi from "joi";

export const citySchema = Joi.object({
    name: Joi.string().required(),
    description: Joi.string().required(),
    photo: Joi.string().uri().required(),
}); 
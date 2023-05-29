import Joi from "joi";

export const hotelSchema = Joi.object({
    name: Joi.string().required(),
    citiesId: Joi.number().required(),
    description: Joi.string().uri().required(),
    dailyPrice: Joi.number().required(),
    images: Joi.string().uri().required()
}); 
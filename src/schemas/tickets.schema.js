import Joi from "joi";

export const ticketsSchema = Joi.object({
  url: Joi.string().uri().required(),
  airlinesId: Joi.number().required(),
  originCityId: Joi.number().required(),
  destinationCityId: Joi.number().required(),
  departureTime: Joi.string().required(),
  arrivalTime: Joi.string().required(),
  price: Joi.number().required(),
});  
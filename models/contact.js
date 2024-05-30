const { Schema, model } = require('mongoose');
const Joi = require('joi');
const { handleMongooseError } = require('../helpers');

const contactSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, 'Set name for contact'],
    },
    email: {
      type: String,
    },
    phone: {
      type: String,
    },
    favorite: {
      type: Boolean,
      default: false,
    },
  },
  // when creating new document the timestamps will be added, not version
  { versionKey: false, timestamps: true }
);

// this middleware will be triggered if an error occurs during validation and saving
contactSchema.post('save', handleMongooseError);

const Contact = model('contact', contactSchema);

const createContactSchema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string(),
  phone: Joi.string(),
  favorite: Joi.boolean().default(false),
});

const updateContactSchema = Joi.object({
  name: Joi.string(),
  email: Joi.string(),
  phone: Joi.string(),
  favorite: Joi.boolean(),
});

const updateStatusContactSchema = Joi.object({
  favorite: Joi.boolean().required(),
});

const schemas = {
  createContactSchema,
  updateContactSchema,
  updateStatusContactSchema,
};

module.exports = {
  Contact,
  schemas,
};

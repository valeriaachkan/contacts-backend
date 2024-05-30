const express = require('express');
const {
  getAllContacts,
  getOneContact,
  deleteContact,
  createContact,
  updateContact,
  updateStatusContact,
} = require('../controllers/contactsControllers');
const { validateBody } = require('../helpers');
const { schemas } = require('../models/contact');

const contactsRouter = express.Router();

contactsRouter.get('/', getAllContacts);

contactsRouter.get('/:id', getOneContact);

contactsRouter.delete('/:id', deleteContact);

contactsRouter.post(
  '/',
  validateBody(schemas.createContactSchema),
  createContact
);

contactsRouter.put(
  '/:id',
  validateBody(schemas.updateContactSchema),
  updateContact
);

contactsRouter.patch(
  '/:id/favorite',
  validateBody(schemas.updateStatusContactSchema),
  updateStatusContact
);

module.exports = contactsRouter;

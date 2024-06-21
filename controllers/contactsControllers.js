const { HttpError, cntrlWrapper } = require('../helpers');

const { Contact } = require('../routes/contact');

// @ GET /api/contacts
const getAllContacts = async (req, res) => {
  const result = await Contact.find();
  res.json(result);
};

// @ GET /api/contacts/:id
const getOneContact = async (req, res) => {
  const { id } = req.params;
  const result = await Contact.findOne({ _id: id });
  if (!result) {
    throw HttpError(404);
  }
  res.json(result);
};

// @ POST /api/contacts
const createContact = async (req, res) => {
  const result = await Contact.create(req.body);
  res.status(201).json(result);
};

// @ PUT /api/contacts/:id
const updateContact = async (req, res) => {
  const { id } = req.params;
  const result = await Contact.findOneAndUpdate({ _id: id }, req.body, {
    new: true,
  });
  if (!result) {
    throw HttpError(404);
  }
  res.json(result);
};

// @ PATCH /api/contacts/:contactId/favorite
const updateStatusContact = async (req, res) => {
  const { id } = req.params;
  const result = await Contact.findOneAndUpdate({ _id: id }, req.body, {
    new: true,
  });
  if (!result) {
    throw HttpError(404);
  }
  res.json(result);
};

// @ DELETE /api/contacts/:id
const deleteContact = async (req, res) => {
  const { id } = req.params;
  const result = await Contact.findOneAndDelete({ _id: id });
  if (!result) {
    throw HttpError(404);
  }
  res.json(result);
};

module.exports = {
  getAllContacts: cntrlWrapper(getAllContacts),
  getOneContact: cntrlWrapper(getOneContact),
  deleteContact: cntrlWrapper(deleteContact),
  createContact: cntrlWrapper(createContact),
  updateContact: cntrlWrapper(updateContact),
  updateStatusContact: cntrlWrapper(updateStatusContact),
};

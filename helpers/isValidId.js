const { isValidObjectId } = require('mongoose');
const HttpError = require('./HttpError');

const isValidId = (req, res, next) => {
  const { id } = req.params;
  if (!isValidObjectId(id)) {
    next(HttpError(400, `${id} isn't valid id`));
  }
  next();
};

module.exports = isValidId;

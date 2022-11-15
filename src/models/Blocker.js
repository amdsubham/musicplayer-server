const mongoose = require('../db');

const BlockerSchema = new mongoose.Schema({
  should_block_app: {
    type: Boolean,
    required: true,
  },
  message: {
    type: String,
    required: true,
  },
});

BlockerSchema.set('toJSON', {
  transform(doc, returned) {
    const returnedDocument = JSON.stringify(returned);
    const document = JSON.parse(returnedDocument);

    document.id = returned._id;

    delete document._id;
    delete document.__v;

    return document;
  },
});

module.exports = mongoose.model('Blocker', BlockerSchema);

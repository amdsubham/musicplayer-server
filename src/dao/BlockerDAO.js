const mongoose = require('mongoose');

const BlockerModel = require('../models/Blocker');

const Blocker = mongoose.model('Blocker');

exports.read = async () => {
  try {
    return await Blocker.find().populate('blocker');
  } catch (err) {
    throw err;
  }
};

exports.update = async (id, data) => {
  try {
    return await Blocker.findByIdAndUpdate(id, { $set: data }, { new: true });
  } catch (err) {
    throw err;
  }
};

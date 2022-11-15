const BlockerDAO = require('../dao/BlockerDAO');

exports.read = async (_req, res, next) => {
  try {
    const blocker = [
      {
        should_block_app: false,
        message: 'please update the application to get the latest feature',
      },
    ];
    return res.status(200).send(blocker);
  } catch (err) {
    next(err);
  }
};

exports.update = async (req, res, next) => {
  try {
    const { id } = req.params;

    const author = await BlockerDAO.update(id, { ...req.body });

    if (!author) {
      return res.status(404).send({ message: 'Blocker not found' });
    }

    return res.status(200).send({ author });
  } catch (err) {
    next(err);
  }
};

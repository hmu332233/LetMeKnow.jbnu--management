const { format, botServer } = require('../utils');

exports.sendMessage = async function (req, res, next) {
  const { message } = req.body;
  try {
    const result = await botServer.sendMessage({ message });
    res.json(format.response.successTrue(result));
  } catch (err) {
    console.log(err)
    res.json(format.response.successFalse(err, err.message));
  }
}
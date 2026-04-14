const getInfo = (req, res) => {
  res.json({ greeting: 'ahoy' });
};

module.exports = { getInfo };

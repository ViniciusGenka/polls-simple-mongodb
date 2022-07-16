const findAll = (req, res) => {
  res.json({ message: "All users" });
};

const findOne = (req, res) => {
  res.json({ message: `User with id ${req.params.id}` });
};

const create = (req, res) => {
  res.json({ message: `User created successfully` });
};

const update = (req, res) => {
  res.json({ message: `User with id ${req.params.id} updated successfully` });
};

const remove = (req, res) => {
  res.json({ message: `User with id ${req.params.id} deleted successfully` });
};

module.exports = {
  findAll,
  findOne,
  create,
  update,
  remove,
};

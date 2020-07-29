const MovieModel = require("../models/Movie");

async function addNew(data) {
  const issue = new MovieModel(data);
  return issue.save();
}

async function getOne(issueId) {
  return MovieModel.findOne({ _id: issueId });
}

async function deleteOne(issueId) {
  const result = MovieModel.remove({ _id: issueId });
  return result;
}

async function getAllByUser(userId) {
  return MovieModel.find({ userId });
}

async function getAllByUserAndProject(userId, project) {
  return MovieModel.find({ userId, project });
}

async function update(issueId, data) {
  const item = await getOne(issueId);

  // if can't find item, throw error
  if (!item) throw new Error("Could not find the requested item");

  Object.keys(data).forEach((key) => {
    item[key] = data[key];
  });

  return item.save();
}

module.exports = {
  addNew,
  getOne,
  update,
  deleteOne,
  getAllByUser,
  getAllByUserAndProject,
};

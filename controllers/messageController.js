const db = require("../db/queryDB");


async function getLogs(req, res) {
  const logs = await db.getAllLogs();
  res.render("index", { logs: logs })
}

async function createLogGet(req, res) {
  res.render("form");
}

async function createLogPost(req, res) {
  await db.insertLog(req.body.username, req.body.message);
  res.redirect("/");
}

module.exports = {
  getLogs,
  createLogGet,
  createLogPost
};

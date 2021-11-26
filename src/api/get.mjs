import users from '../models/db.mjs'

export default function (req, res) {
  res.statusCode = 200;
  res.setHeader("Content-Type", "application/json");
  res.write(JSON.stringify(users));
  res.end();
};
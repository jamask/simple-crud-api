export default function(res, statusCode, data) {
  res.statusCode = statusCode;
  res.setHeader("Content-Type", 'text/json');
  res.write(JSON.stringify(data));
  res.end();
}
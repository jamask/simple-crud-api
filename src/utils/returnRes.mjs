export default function(res, statusCode, data) {
  res.statusCode = statusCode;
  if (data) {
    res.setHeader("Content-Type", 'text/json');
    res.write(JSON.stringify(data));
  }
  res.end();
}
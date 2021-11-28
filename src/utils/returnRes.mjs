export default function(res, statusCode, data) {
  res.statusCode = statusCode;
  if (data) {
    res.setHeader("Content-Type", 'text/json');
    let resData = '';
    try {
      resData = JSON.stringify(data);
    } catch (error) {
      res.statusCode = 500;
      resData = JSON.stringify({'message': error.message});
    }
    res.write(resData);
  }
  res.end();
}
import users from '../models/db.mjs';

function returnRes (res, statusCode, contentType, data) {
  res.statusCode = statusCode;
  res.setHeader("Content-Type", contentType);
  res.write(JSON.stringify(data));
  res.end();
}

export default function (req, res) {
  const arrReqUrl = req.url.split('/');
  const queryParent = arrReqUrl[1];
  const queryChild = arrReqUrl[2];

  if(queryParent === 'person') {
    if(queryChild) {
      for(let i = 0; i < users.length; i++) {
        if (users[i]['id'] === queryChild) {
          returnRes(res, 200, 'text/json', users[i]);
          break;
        }
      }
      returnRes(res, 404, 'text/plain', 'User not found!');
    } else {
      returnRes(res, 200, 'text/json', users);
    }
  } else {
    returnRes(res, 400, 'text/plain', 'Invalid request!');
  }

};
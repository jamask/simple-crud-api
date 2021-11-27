import users from '../models/db.mjs';
import returnRes from '../utils/returnRes.mjs'

export default function(req, res) {
  const arrReqUrl = req.url.split('/');
  const queryParent = arrReqUrl[1];
  const queryChild = arrReqUrl[2];

  if(queryParent === 'person') {
    if(queryChild) {
      let exist = 0;
      for(let i = 0; i < users.length; i++) {
        if (users[i]['id'] === queryChild) {
          returnRes(res, 200, users[i]);
          exist = 1;
          break;
        }
      }
      if(!exist) returnRes(res, 404, {'message': 'User not found'});
    } else {
      returnRes(res, 200, users);
    }
  } else {
    returnRes(res, 404, {'message': 'Resource that you requested does not exist'});
  }

};
import users from '../models/db.mjs';
import returnRes from '../utils/returnRes.mjs'
import isUUID from '../utils/isUUID.mjs'

export default function(req, res) {
  const arrReqUrl = req.url.split('/');
  const queryParent = arrReqUrl[1];
  const queryChild = arrReqUrl[2];

  if(queryParent === 'person') {
    if(queryChild) {
      let exist = 0;
      if (isUUID(queryChild)) {
        for(let i = 0; i < users.length; i++) {
          if (users[i]['id'] === queryChild) {
            returnRes(res, 200, users[i]);
            exist = 1;
            break;
          }
        }
      } else {
        returnRes(res, 400, {'message': 'User id not valid (not uuid)'});
        exist = 1;
      }
      if(!exist) returnRes(res, 404, {'message': 'User not found'});
    } else {
      returnRes(res, 200, users);
    }
  } else {
    returnRes(res, 404, {'message': 'Resource that you requested does not exist'});
  }

};
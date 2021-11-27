import users from '../models/db.mjs';
import returnRes from '../utils/returnRes.mjs';

export default function(req, res) {
  const arrReqUrl = req.url.split('/');
  const queryParent = arrReqUrl[1];
  const queryChild = arrReqUrl[2];

  if(queryParent === 'person') {
    if(queryChild) {
      let exist = 0;
      for(let i = 0; i < users.length; i++) {
        if (users[i]['id'] === queryChild) {
          users.splice(i, 1);
          returnRes(res, 204);
          req.destroy()
          exist = 1;
          break;
        }
      }
      if(!exist) returnRes(res, 404, {'message': 'User id not found'});
    } else {
      returnRes(res, 400, {'message': 'No user id receive'})
    }
  } else {
    returnRes(res, 400, {'message': 'You should use /person route'})
  }
}
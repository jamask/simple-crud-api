import users from '../models/db.mjs';
import returnRes from '../utils/returnRes.mjs';
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
            let data = '';

            req.on('data', function (chunk) {
              data += chunk.toString();
            });

            req.on('end', async () => {
              const { name, age, hobbies } = JSON.parse(data);
              const person = users[i];
              person['name'] = name || person['name'],
              person['age'] = age || person['age'],
              person['hobbies'] = hobbies || person['hobbies']
              
              returnRes(res, 200, person);
            });
            exist = 1;
            break;
          }
        }
      } else {
        returnRes(res, 400, {'message': 'User id not valid (not uuid)'});
        exist = 1;
      }
      if(!exist) returnRes(res, 404, {'message': 'User id not found'});
    } else {
      returnRes(res, 400, {'message': 'No user id receive'})
    }
  } else {
    returnRes(res, 400, {'message': 'You should use /person route'})
  }
}
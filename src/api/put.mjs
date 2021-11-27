import users from '../models/db.mjs';
import returnRes from '../utils/returnRes.mjs';

const defaultUser = {
  'name': 'Default name',
  'age': '26',
  'hobbies': [],
};

export default function(req, res) {
  const arrReqUrl = req.url.split('/');
  const queryParent = arrReqUrl[1];
  const queryChild = arrReqUrl[2];

  if(queryParent === 'person') {
    if(queryChild) {
      let exist = 0;
      for(let i = 0; i < users.length; i++) {
        if (users[i]['id'] === queryChild) {
          let data = '';

          req.on('data', function (chunk) {
            data += chunk.toString();
          });

          req.on('end', async () => {
            const { name, age, hobbies } = JSON.parse(data);
            const person = users[i];
            person['name'] = name || defaultUser.name,
            person['age'] = age || defaultUser.age,
            person['hobbies'] = hobbies || defaultUser.hobbies
            
            returnRes(res, 201, person);
          });
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
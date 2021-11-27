import { v4 as uuidv4 } from 'uuid';
import users from '../models/db.mjs';
import returnRes from '../utils/returnRes.mjs'

const defaultUser = {
  'name': 'Default name',
  'age': '26',
  'hobbies': [],
}

export default function(req, res) {
  const arrReqUrl = req.url.split('/');
  const queryParent = arrReqUrl[1];

  if (queryParent === 'person') {
    let data = '';

    req.on('data', function (chunk) {
        data += chunk.toString();
    });

    req.on('end', async () => {
      const { name, age, hobbies } = JSON.parse(data);
      const person = {
        'id': uuidv4(),
        'name': name || defaultUser.name,
        'age': age || defaultUser.age,
        'hobbies': hobbies || defaultUser.hobbies
      }

      users.push(person);
      returnRes(res, 201, person);
    });
  } else {
    returnRes(res, 400, {'message': 'You should use /person route'});
  }
}
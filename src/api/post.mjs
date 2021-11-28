import { v4 as uuidv4 } from 'uuid';
import users from '../models/db.mjs';
import returnRes from '../utils/returnRes.mjs'

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
      
      if (!name || !age || !hobbies) {
        returnRes(res, 400, {'message': 'Missing required keys (name, age, hobbies)'});
      } else {
        const person = {
          'id': uuidv4(),
          name,
          age,
          hobbies
        }

        users.push(person);
        returnRes(res, 201, person);
      }
    });
  } else {
    returnRes(res, 400, {'message': 'You should use /person route'});
  }
}
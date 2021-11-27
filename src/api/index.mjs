import get from './get.mjs';
import post from './post.mjs';
//import { put } from './put';
//import { del } from './delete';

export default function routes(req, res) {
  switch(req.method) {
    case "GET":
      get(req, res);
      break;

    case "POST":
      post(req, res);
      break;

    case "PUT":
      put(req, res);
      break;

    case "DELETE":
      del(req, res);
      break;

    default:
      // Send response for requests with no other response
      response.statusCode = 400;
      response.write("No Response");
      response.end();
  }
}
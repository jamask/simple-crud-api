import { get } from './get';
import { post } from './post';
import { put } from './put';
import { del } from './delete';

export function routes(req, res) {
  switch (request.method) {
    case "GET":
      get(request, response);
      break;

    case "POST":
      post(request, response);
      break;

    case "PUT":
      put(request, response);
      break;

    case "DELETE":
      del(request, response);
      break;

    default:
      // Send response for requests with no other response
      response.statusCode = 400;
      response.write("No Response");
      response.end();
  }
}
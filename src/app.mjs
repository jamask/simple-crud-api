import http from 'http';
import dotenv from 'dotenv'
import { routes } from './api/'

dotenv.config();
const PORT = process.env.PORT || 4000;

const server = http.createServer((req, res) {
  routes(req, res);
});

server.listen(PORT, host, (err) => {
    err ? console.error(err) : console.log(`Server is running on http://${host}:${PORT}`);
});
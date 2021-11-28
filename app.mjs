import http from 'http';
import dotenv from 'dotenv';
import routes from './src/api/index.mjs';

dotenv.config();
const PORT = process.env.PORT || 4000;

const server = http.createServer((req, res) => {
  routes(req, res);
});

server.listen(PORT, (err) => {
    err ? console.error(err) : console.log(`Server is running on http://localhost:${PORT}`);
});
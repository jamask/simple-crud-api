import { expect } from '@jest/globals';
import dotenv from 'dotenv';
import request from 'supertest';
import 'regenerator-runtime/runtime';

dotenv.config();
const PORT = process.env.PORT || 4000;
const app = `http://localhost:${PORT}`;

describe("b2b test 1", () => {
  test("should return empty array of persons", () => {
    const body = request(app).get('/person');
    expect(JSON.parse(body.text)).toEqual([]);
  });

  test("should return empty array of persons", async () => {
    const body = request(app).get('/person');
    expect(JSON.parse(body.text)).toEqual([]);
  });
});
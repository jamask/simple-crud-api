import { expect } from '@jest/globals';
import dotenv from 'dotenv';
import request from 'supertest';
import 'regenerator-runtime/runtime';


dotenv.config();
const PORT = process.env.PORT || 4000;
const app = `http://localhost:${PORT}`;

describe("api", () => {
  let personId;

  test("should return empty array of persons", async () => {
    const body = await request(app).get('/person');
    expect(JSON.parse(body.text)).toEqual([]);
  });

  test("should create person", async () => {
    const createPerson = {
      "name": "Askhat",
      "age": "36",
      "hobbies": ["programming", "chess", "reading"]
    };
    const body = await request(app).post('/person').send(createPerson);
    expect(JSON.parse(body.text)).toEqual(
      expect.objectContaining({ id: expect.any(String), ...createPerson })
    );
  });
});
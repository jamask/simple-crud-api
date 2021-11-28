# Simple CRUD API

Solution of [Task - https://github.com/rolling-scopes-school/basic-nodejs-course/blob/master/descriptions/simple-crud-api.md](https://github.com/rolling-scopes-school/basic-nodejs-course/blob/master/descriptions/simple-crud-api.md).

## How to install

- Install [Node.js](https://nodejs.org/en/) (>16)
- Clone this repository: `https://github.com/jamask/simple-crud-api`
- Switch branch to task1 `git checkout task1`
- Run `npm install -D` in command line

## How to start

- Start app in development mode `npm run start:dev`
- Start app in product mode `npm run start:prod`
- Start tests `npm run test`

API path `/person`:
    * **GET** `/person` or `/person/${personId}` return all persons or person with corresponding `personId`
    * **POST** `/person` is used to create record about new person and store it in database
    * **PUT** `/person/${personId}` is used to update record about existing person
    * **DELETE** `/person/${personId}` is used to delete record about existing person from database

Persons are stored as `objects` that have following properties:
    * `id` — unique identifier (`uuid`) generated on server side
    * `name` — person's name (`string`)
    * `age` — person's age (`number`)
    * `hobbies` — person's hobbies (`array` of `strings` or empty `array`)


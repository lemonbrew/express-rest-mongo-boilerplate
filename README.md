# express-rest-boilerplate
A simple boiler plate for express and mongo

Includes: <br>
<a href="https://www.npmjs.com/package/nodemon">nodemon</a> for rapid development<br>
<a href="https://www.npmjs.com/package/dotenv">dotenv</a> for environment variable support<br>
<a href="https://www.npmjs.com/package/apidoc">apiDoc</a> for documenting your api<br>
<a href="https://www.npmjs.com/package/mongodb">mongodb</a> for interfacing with mongo. 

## Start
- `git clone git@github.com:cotterjd/simple-express-boilerplate.git`<br>
- `npm install` <br>
- add `.env` file based off `.env.example` with mongo connection string
- replace "my-db" with name of your actual database name in `src/config/mongo.js`
- `npm start`<br>

## Use
`curl http://localhost:3040`</br>

`curl -X POST -H "Content-Type: application/json" -d "{\"name\": \"jon\" }" http://localhost:3040`

## Develop
`npm run dev`

## Update Documentation
`npm run doc`

### Removing apiDocs
If you don't want to use apidocs, it's very simple to remove
- delete root level docs folder
- remove `doc` npm script, dev dependency `apidoc`, and apidoc configuration from package.json

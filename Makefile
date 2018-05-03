start:
	npm start

develop:
	NODE_ENV=development npm run nodemon -- --exec npm run babel-node -- server/bin/rss-reader.js

test:
	npm test

lint:
	npm run eslint -- server app
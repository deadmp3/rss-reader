start:
	npm start

develop:
	NODE_ENV=development npm run webpack -- --watch

build:
	rm -rf dist
	npm run build

lint:
	npm run eslint -- src
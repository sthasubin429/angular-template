.DEFAULT_GOAL := help

dc = docker-compose

help: # Show this help
	@egrep -h '\s#\s' $(MAKEFILE_LIST) | sort | awk 'BEGIN {FS = ":.*?# "}; {printf "\033[36m%-20s\033[0m %s\n", $$1, $$2}'

setup: # Setups the project and serves the app
	npm install -g @angular/cli@15.2.0
	npm install
	npm run prepare
	${dc} build
	${dc} up

serve: # Serves the app
	${dc} up

test: # Runs unit test of the project
	npm run test -- --watch=false

refresh: # Rebuilds the project and serves the app
	rm -rf node_modules
	npm install
	${dc} build
	${dc} up

pre-commit: # Fixes lint issues and runs pre-commit commands
	rm -rf coverage
	npm run lint-fix
	npm run lint
	codeclimate analyze
	npm run test -- --watch=false

test-watch: # Watches for changes when testing
	npm run test -- --watch=true

lint: # Runs lint on the project
	npm run lint

lint-fix: # Fixes lint issues for the project
	npm run lint-fix
	npm run lint

test-path: # tests specific folder or files. takes file as argument. To Run: make test file=path-to-folder/file
	ng test --include $(file) --watch=false

down: # stops and removes project containers
	${dc} down

stop: # stops services
	${dc} stop

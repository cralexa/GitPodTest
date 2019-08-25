all:
	clear
	docker build -t fib .
	docker run fib

slate:
	clear
	docker pull python:3.6.8-alpine
	docker run --name SlatePy -d python:3.6.8-alpine
	docker exec -it SlatePy /bin/bash

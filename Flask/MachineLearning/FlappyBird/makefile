compose:
	docker-compose build
app:
	docker-compose up
	docker rm $(docker os -a -f status=exited -q)

build:
	docker build -t app .
run:
	docker run app
clean:
	docker rmi $(docker images -a -q)

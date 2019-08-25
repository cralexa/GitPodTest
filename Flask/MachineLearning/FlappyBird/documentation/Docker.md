Build Docker Image
	- docker build -t app .
	# -t / --tag gives custom name
	# . means from local directory
	# app is the name of the Image

Run Docker Container
	- docker run -p 5000:5000 app
	# -p / --port tells which port to go to on local
	# 5000:5000 means go from port 5000 of Container to port 5000 
	#
	docker-compose up

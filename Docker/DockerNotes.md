Docker Command Notes

docker build
# creates new image
# add flag -t to give tag
    Ex:  docker build -t NewThingy

docker run <image>  
# creates new container from image
    Ex:  docker run NewThingy   
# add --name to give name  # name and tag not the same...
    Ex:  docker run --name NewThingy   
# -d runs container in the background
  Ex: docker run -d --name Thing
# -p maps docker daemen port to host port
  Ex: docker run -p NewThingy

docker start <id/name>
# starts said container using id or name given with -t
    Ex:  docker start NewThingy

docker stop <id/name>
# stop container
    Ex:  docker start NewThingy

docker ps
# shows list of containers
# add -a flag to include stopped container

docker rm <id/name>
# removes containers

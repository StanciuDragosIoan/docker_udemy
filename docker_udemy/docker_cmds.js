/*
    Run nGinX as a docker container 


    run:

        docker image pull nginx:latest

    next run:

        docker images (to see the list of available images)

    run:

        docker container run -itd --name web-server-nginx -p 8080:80 nginx:latest
            * this cmd spits out an id for the container


    run:
        $ docker ps -a
            * this cmd shows us the running container

    go to http://localhost:8080 and see the nginX run in browser as a container


    other cmds:
        docker pause + container id
        docker unpause + container id

*/
/*  

    Will write a dockerfile

    copied CC_Docker in the project and opened it in bash

    cd S2

    cd D1

    created Docker file -> touch Dockerfile

    added instructions:

        ARG CODE_VERSION=18.04

        FROM ubuntu:${CODE_VERSION}

        RUN apt-get update -y

        CMD ["bash"]


    run 
    
        docker build -t img_from . (from the docker file in the crt directory)
*/      
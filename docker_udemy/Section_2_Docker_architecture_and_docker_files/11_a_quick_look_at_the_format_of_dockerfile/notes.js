/*
    Dockerfile

        It is a set of instructions to be processed by the docker engine via docker daemon (engine runs the daemon)

        It is the primary way of interacting with docker 

        Order of sequence is important 

        Each instruction creates a layer of the docker img to be built

        Layers can be cached and reused by Docker


    Dockerfile structure

        it is a file with no extention at all
        e.g. Dockerfile

        any text editor can be used to create the file
        *this makes the file easy to parse by docker to build images

        inside the docker file there are instructions of 3 types:

            fundamental instructions

            configuration instructions

            execution instructions
*/
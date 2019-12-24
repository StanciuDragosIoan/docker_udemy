/*
    How does Docker work?

        There is a docker Ecosystem

            Docker Engine (or simply Docker)

                Docker Engine Architecture

                    Docker and the concept of containerization revolves around 3 elements:
                        
                        docker client: 
                            (machine through which users interact with docker - via CLI and Docker APIs)
                        
                        docker host:  
                            (is the machine which performs the task of containerization it runs a piece of software called
                            Docker daemon which listens to and performs actions asked by the docker client. Docker daemon 
                            builds docker files and turns them into docker images/ docker files and docker images can 
                            directly with docker daemon/ images can be built from docker files or pushed/pulled from 
                            docker hub, the task is performed by the docker host through the docker daemon)

                            docker images can be run as containers, containers ca communicate with docker daemon 
                            via docker images (any changes made to the container are reflected temporarily on the docker image)

                            docker client = passes user input and displays output from docker host


                        docker registry:
                                serves as a place t ostore docker images and make them available to others
                                docker client talks to docker daemon bidirectionally
                            

                        Docker client passes requests through docker CLI and Docker API and receives results to be displayed
                        Docker host runs docker daemon and works with docker images and containers
                        Docker registry acts as a universal place to access available docker images



                        Docker file (build)
                        Docker images (ship)
                        Docker container (run)
*/
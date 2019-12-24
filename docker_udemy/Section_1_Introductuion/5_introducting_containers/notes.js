/*
    Introducing containers

        A container is an abstraction at the Application layer that packages code
        and dependencies together

        In other terms: a box

        Instead of just shipping the app, containers ship the app + their environment
        and they remain small-sized

        VMs vs Containers

        VM
            App
            Libs
            Guest OS
            Hypervizor
            Host OS
            Infrastructure


            VMs duplicate the host OS files/dependencies
            
        Containers

            Container
            App
            Libs
            Docker
            Host OS
            Infrastructure

            *they contain the app code + dependencies (OS lvl dependencies)
            Containers don't duplicate the host OS files/dependencies

                    they consume less storage and memory
                    easier to ship
                    if they work on one machine they will work on all machines
                    cost efficient and easy to scale
                    possible to eliminate data loss and downtime


        Who is using containers

            Google
            Expedia
            Paypal
            gsk
            
*/
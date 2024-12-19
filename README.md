# To test your application, you need docker and only one command:
    docker compose up --build -d

         # run and check in cmd
        docker compose up --build -d && start https://127.0.0.1:8443
        automatically opens a browser with the site 
        
# description 
    - uses ports 80, 443, 8443, 6371, 3306, so if you use them, you need to release them;
    - to check site: https://127.0.0.1:8443 

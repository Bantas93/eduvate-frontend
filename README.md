## How to run using docker

1. Copy this repo, in file run :

```shell
#Development
sudo docker compose -f compose-frontend.yml --profile dev up --build
```

or

```shell
#Production
sudo docker compose -f compose-frontend.yml --profile prod up --build
```

2. Access the frontend application at:

```
http://localhost:3000
```

3. if success, you must be actived the backend aplication to give full power aplication, follow instructions from :

```
https://github.com/MahendraCandi/udaring-backend/tree/development
```

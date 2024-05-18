# 2024_mini_react_backend
The goal of this project is to create a clean react client for one of my course. 
The backend is free to choose.

This application doesn't contain any authentication like token or hashed password.
It only serve the purpose of being a quick and easy backend to test react functionality.

### Instructions :
- Run : npm install
- Run : npx prisma generate
- Create a .env
- Adapt the .env.example to .env
- Run : docker-compose build
- Run : docker-compose up
- Run : npx prisma migrate dev --name init
- Run : npx prisma migrate deploy

### Problems with docker :
- Run : rm  ~/.docker/config.json 
- Run : docker-compose build

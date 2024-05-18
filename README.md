# 2024_mini_react_backend
The goal of this project is to create a clean react client for one of my course. The backend is free to choose.

# Instruction v1 :
- Run : npm install
- Run : npx prisma generate
- Create a .env
- Adapt the DATABASE_URL from .env.example to .env for development environment
- Run : docker-compose build
- Run : docker-compose up
- Run : npx prisma migrate dev --name init
- Run : npx prisma migrate deploy

# Problème avec docker :
- Run : rm  ~/.docker/config.json 
- Run : docker-compose build

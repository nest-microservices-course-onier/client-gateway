<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

# Client Gateway for this backend server using microservices

# Production

To create the unique docker image to production of this client-gateway run this command

```
docker build -f Dockerfile.prod -t client-gateway .
```

## NATS

1. This command is for run the Nats docker image server( it is not necessary when we create a network with docker compose and include the NATS service in that network)

```
docker run -d --name nats-main -p 4222:4222 -p 6222:6222 -p 8222:8222 nats
```

## Instalations

1. joi

```
npm i joi
```

2. dotenv

```
npm i dotenv
```

3. Install microservices

```
npm i --save @nestjs/microservices
```

4. **NATS**

```
npm i --save nats
```

# Go Postgres Docker

## Features

- Go REST API's
- Database connection with PostgreSQL
- Serving frontend static files using Go
- Pinia to store API data on frontend
- Dockerized Go backend

## Quick start

1. Clone this repo using `git clone https://github.com/mohamedsamara/go-postgres-docker.git`
2. Move to the directory: `cd <PROJECT_NAME>`.<br />

## Setup frontend

This will install frontend dependencies and create a build (`dist`)

```
make static
```

## Run Go backend

```
go run *.go
```

## Steps to run in Docker container

### Build Image

```
make build
```

### Run container

```
make run
```

See [Makefile](/Makefile)

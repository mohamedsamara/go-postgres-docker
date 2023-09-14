# syntax=docker/dockerfile:1.2

# Stage 1: Build the static files
FROM node:20.5.1-alpine3.18 AS frontend-builder

WORKDIR /frontend

COPY frontend/package.json frontend/yarn.lock ./

RUN yarn install --frozen-lockfile

COPY /frontend .

RUN yarn build

# Stage 2: Build the binary
FROM golang:1.19 AS binary-builder

WORKDIR /app

COPY . .
COPY --from=frontend-builder /frontend/dist ./frontend/dist

RUN go mod download

RUN CGO_ENABLED=0 go build

# Stage 3: Run the binary
FROM alpine:latest

RUN apk add --no-cache ca-certificates openssl

COPY --from=binary-builder /app/go-postgres-docker /app/

RUN ls app

EXPOSE 3000
ENTRYPOINT ["/app/go-postgres-docker"]

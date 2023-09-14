package main

import (
	"fmt"
	"log"
	"net/http"
	"os"

	"github.com/joho/godotenv"

	"github.com/mohamedsamara/go-postgres-docker-hub/db"
	"github.com/mohamedsamara/go-postgres-docker-hub/routes"
)

func main() {
	err := godotenv.Load()
	if err != nil {
		fmt.Println("main: no .env file")
	}

	DB := db.InitDB()

	router := routes.InitRouter(DB)

	PORT := os.Getenv("PORT")
	if PORT == "" {
		PORT = "3000"
	}

	log.Println("🚀 Listening on PORT :", PORT)
	log.Fatal(http.ListenAndServe(":"+PORT, router))
}

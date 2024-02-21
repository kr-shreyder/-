package main

import (
	"flag"
	"log"
	"polygames/internal/app"

	"github.com/joho/godotenv"
)

// @title Swagger Example API
// @version 1.0
// @description This is a sample server Petstore server.
// @BasePath /api/v1
// @host     localhost:8080

func main() {
	readEnv := flag.String("env-file", ".env", "Path to application env file.")
	configPath := flag.String("config-path", "config.yml", "Path to application config file.")
	flag.Parse()
	println(*configPath)
	if *readEnv != "" {
		if err := godotenv.Load(*readEnv); err != nil {
			log.Fatal(err)
		}
	}

	application, err := app.New(*configPath)
	if err != nil {
		log.Fatal(err)
	}

	if err = application.Start(); err != nil {
		log.Fatal(err)
	}
}

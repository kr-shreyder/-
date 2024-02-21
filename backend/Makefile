.PHONY:run
run:
	go run cmd/main.go
migrate:
	go run cmd/migrate.go

.PHONY:build-w
build:
	go build -o build/polygames.exe cmd/main.go

.PHONY:docs
docs:
	swag init -o cmd/docs --parseDependency --parseInternal --parseDepth 1 -q -g cmd/main.go
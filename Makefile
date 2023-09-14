FRONTEND_DIR=frontend
BUILD_DIR=dist

clean:
	cd $(FRONTEND_DIR); \
	if [ -d $(BUILD_DIR) ]; then rm -rf $(BUILD_DIR); fi

static: clean
	cd $(FRONTEND_DIR); \
	yarn install; \
	yarn build

build: 
	docker compose build

run:
	docker compose up -d postgres && docker compose up

stop:
	docker compose down
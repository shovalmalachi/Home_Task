up:
	docker compose up --build -d

down:
	docker compose down

logs:
	docker compose logs -f

ps:
	docker compose ps

seed:
	docker compose exec app npm run seed

test:
	./scripts/test.sh

health:
	curl http://localhost:3000/health

fruits:
	curl http://localhost:3000/api/fruits

rebuild:
	docker compose down
	docker compose up --build -d

run:
	docker compose up --build -d
	@echo "Waiting for app..."
	@for i in 1 2 3 4 5 6 7 8 9 10; do \
		if curl -s http://localhost:3000/health | grep '"status":"ok"' > /dev/null; then \
			echo "App is ready"; \
			break; \
		fi; \
		sleep 2; \
	done
	docker compose exec app npm run seed
	./scripts/test.sh
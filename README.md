# Home Task

A simple containerized web application built with **Node.js** and **MongoDB**.

The application:
- serves a simple HTML page
- displays the number of apples in the database
- exposes a health endpoint
- runs fully with Docker Compose
- includes automated seeding, testing, and CI validation

---

## Architecture

The project contains two main services:

- **app** – Node.js + Express web application  
- **mongo** – MongoDB database  

Each component runs in its own container.

### Flow

Browser → Node.js app → MongoDB

---

## Tech Stack

- Node.js  
- Express  
- MongoDB  
- Docker  
- Docker Compose  
- GitHub Actions  

---

## Project Structure

```bash
.
├── .github/workflows
│   └── ci.yml
├── app
│   ├── Dockerfile
│   ├── package.json
│   ├── public
│   │   └── index.html
│   ├── scripts
│   │   └── seed.js
│   └── src
│       ├── config.js
│       ├── db.js
│       ├── server.js
│       └── routes
│           ├── fruits.js
│           └── health.js
├── scripts
│   └── test.sh
├── .gitignore
├── Makefile
├── README.md
└── docker-compose.yml
```



## Quick Start

Run everything from scratch with a single command:

- make run
- http://localhost:3000

This command:
-  builds and starts the containers
-  waits for the application to be ready
-  seeds the database
-  runs validation tests

The HTML page:
- displays a simple Hello World page
- shows the number of apples in the database
- lists fruit data retrieved from MongoDB

## Automation
The project is fully automated using:
- Docker Compose for provisioning the architecture
- Makefile for one-command execution and operational shortcuts
- seed script for deterministic database initialization
- test script for validation
- GitHub Actions CI for automated checks on push and pull       requests

## CI
The GitHub Actions workflow:
- builds the containers
- start the services
- waits for readiness
- seeds the database
- runs tests

## Bonus
- Makefile one-command flow
- README
- CI
- Architecture explanation
- A MongoDB health check in "docker compose.yml" using     'mongosh' ping - ensures proper startup ordering and help detect service readiness issues.

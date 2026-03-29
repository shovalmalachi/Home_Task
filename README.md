# Home Task

A simple containerized web application built with **Node.js** and **MongoDB**.

The application:
- serves a simple HTML page
- returns the number of apples stored in the database
- exposes a health endpoint
- runs fully with Docker Compose
- includes automated seeding, test automation, and CI validation

## Architecture

The project contains two main services:

- **app** – Node.js + Express web application
- **mongo** – MongoDB database

Each component runs in its own container.

### Flow

Browser → Node.js app → MongoDB

## Tech Stack

- Node.js
- Express
- MongoDB
- Docker
- Docker Compose
- GitHub Actions

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
└── docker-compose.yml ```





In order to run it all from scratch, use: 
make run

This command:

builds and starts the containers
waits for the application to become ready
seeds the database
runs the validation tests

What the HTML Page Shows

The HTML page:

displays a simple Hello World page
shows the number of apples in the database
lists the fruit data returned from MongoDB
Automation

The project is fully automated using:

Docker Compose for provisioning the architecture
Makefile for one-command execution and operational shortcuts
seed script for deterministic database initialization
test script for validation
GitHub Actions CI for automated checks on push and pull request
CI

A GitHub Actions workflow is included to:

build the containers
start the services
wait for readiness
seed the database
run the tests
Design Notes
The architecture was intentionally kept simple and clear.
Each major component runs in its own container.
The application includes retry logic for MongoDB connectivity during startup.
The Makefile was added to simplify the user experience and allow both one-command execution and step-by-step contro
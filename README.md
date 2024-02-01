# Time Tracker Application - Educational Project

## WIP: This project is a work in progress and is not yet complete.

## Introduction
This project is part of a class assignment focused on learning database management and API development. It involves using Knex.js to migrate and seed a PostgreSQL database and then creating an API to interact with this database. The database was set up in a Docker container to mimic a real-world development environment.

## Learning Objectives
- **Database Management with Knex.js:** Using Knex.js to create migration and seed scripts for PostgreSQL.
- **Docker Integration:** Setting up a PostgreSQL database within a Docker container.
- **API Development:** Writing an API in Node.js with Express to perform CRUD operations on the database.

## Workflow Overview
1. **Database Setup in Docker:** We started by setting up a PostgreSQL database inside a Docker container to provide an isolated and consistent development environment.

2. **Knex Migrations and Seeding:** Using Knex.js, we created migration scripts to define the structure of our database and seeding scripts to populate it with initial data.

3. **API Development:** We then developed an API using Node.js and Express, which communicates with the database to perform CRUD operations.

4. **Testing and Iteration:** Throughout the development, we continuously tested our API endpoints and database operations, making adjustments as needed.

## Database Schema
Below is the schema diagram for our database, outlining the structure and relationships of the tables:

![Database Schema](media/db_diagram.png)

_The diagram illustrates the tables and relationships involved in the time tracker application._

## API Endpoints
The application includes the following endpoints for user management:

- **GET /users** - Retrieve all users
- **GET /users/:id** - Retrieve a single user by ID
- **POST /users** - Create a new user
- **PUT /users/:id** - Update a user
- **DELETE /users/:id** - Delete a user


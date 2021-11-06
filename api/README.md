# Backend API and PostgresSQL DB

Backend Node.js API with PostgresSQL database. 

## Database Creation with PostgreSQL 
> Use the SQL scripts in api/postgresql-sql
- [x] create-database.sql
- [x] create-tables.sql
- [x] insert-data.sql


### Endpoints
* http://localhost:8080/api/persons         (GET: list of all people)
* http://localhost:8080/api/persons         (POST: creat a new person, with payload)
* http://localhost:8080/api/persons/:id     (GET: a single person)
* http://localhost:8080/api/persons/:id     (PUT: update a single person, with payload)
* http://localhost:8080/api/persons?activity=5  (GET: list of people filtered by activity)

## API in Node.js
```bash

### Installation

# change directory
cd api

### Installation
* `npm install` (installing dependencies)

### Developpement
node server.js
* in your browser [http://localhost:8080](http://localhost:8080) 

```

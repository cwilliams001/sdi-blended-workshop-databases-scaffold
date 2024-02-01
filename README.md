# Databases

For this activity, you will fulfill the following requirements:

## FIRST STEP

Fork & clone this repository

## Project Specs

This week's workshop will be more free-form to give you the freedom to create datasets as you see fit. As long as the requirements below are met, your database entries and API endpoints can be comprised of whatever you wish.

- API must contain endpoints that cover all CRUD functionality
  - Must contain parameterized endpoints or endpoints that handle query parameters
- Must include a screenshot or the XML output to your schema design. Feel free to use whichever schema design tool you like, here's a [lightweight tool](https://ondras.zarovi.cz/sql/demo/) you can use.
- PostgreSQL database must be maintained and interacted with using Knex.js
  - Must seed initial data into database using Knex
  - Must retrieve data from the database using the join method of Knex

## Stretch Goals

- Make data structures stored in database more complex to increase lookup times. Increase initial seed data amount by an exponential scale (i.e. from 100 entires to 1,000,000). Use the [morgan](https://expressjs.com/en/resources/middleware/morgan.html) middleware to add rudimentary metrics logging for your API requests and check lookup time performance after bloating data. Look into ways to improve performance (hint - start with indexing).
- Create a straightforward front-end to display the data coming back from your API.
- Send an HTTP request to a 3rd party API to seed your database. Transform the resultant data into the format you want for your database prior to insertion.
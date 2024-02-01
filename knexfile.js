require ('dotenv').config();

const connectionString = process.env.DB_CONNECTION_STRING;

module.exports = {

  development: {
    client: 'pg',
    connection: connectionString
  } 

};

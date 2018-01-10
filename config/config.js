require('dotenv').config();

const config = {
  neo4j_bolt_connection_url: process.env.NEO4J_BOLT_CONNECTION_URL || 'bolt://localhost',
  neo4j_http_connection_url: process.env.NEO4J_HTTP_CONNECTION_URL || 'http://localhost:7474',
  neo4j_username: process.env.NEO4J_USERNAME || 'neo4j',
  neo4j_password: process.env.NEO4J_PASSWORD || 'password',
};

module.exports = config;

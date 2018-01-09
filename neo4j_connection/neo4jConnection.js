const neo4j = require('neo4j-driver').v1;
const config = require('../config');

const driver = neo4j.driver(
  config.neo4j_bolt_connection_url,
  neo4j.auth.basic(config.neo4j_username, config.neo4j_password),
);
const session = driver.session();

module.exports = {
  neo4j,
  driver,
  session,
};

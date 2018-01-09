const config = require('./config');
require('should');

describe('Config', () => {
  it('Should have the following properties', () => {
    config.should.have.property('neo4j_bolt_connection_url').and.not.empty();
    config.should.have.property('neo4j_http_connection_url').and.not.empty();
    config.should.have.property('neo4j_username').and.not.empty();
    config.should.have.property('neo4j_password').and.not.empty();
  });
});

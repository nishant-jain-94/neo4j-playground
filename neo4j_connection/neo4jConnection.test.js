require('should');
const neo4j = require('./neo4jConnection');

describe('Neo4j Connection', () => {
  it('Should contain an instance of session', () => {
    neo4j.should.have.property('session');
    neo4j.session.should.be.an.Object();
    neo4j.session.should.not.be.empty();
  });

  it('Should contain an instance of driver', () => {
    neo4j.should.have.property('driver').and.not.empty();
  });
});

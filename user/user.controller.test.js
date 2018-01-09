const should = require('should');
const proxyquire = require('proxyquire');
const neo4j = require('neo4j-driver').v1;
const config = require('../config');
const loadSeedData = require('../seed_data_loader');

let UserController;
const driver = neo4j.driver(
  config.neo4j_test_bolt_connection_url,
  neo4j.auth.basic(config.neo4j_username, config.neo4j_password),
);
const session = driver.session();

describe('User controller', () => {
  before(async () => {
    await loadSeedData(session);
    UserController = proxyquire('./user.controller', {
      '../neo4j_connection': {
        driver,
        session,
      },
    });
  });

  it('Should be able to Get User', async () => {
    const user = await UserController.getUser('USER_01');
    should.exist(user);
    user.should.have.property('name');
    user.should.have.property('userId');
    user.should.have.property('profile_pic');
  });

  it('Should be able to Get Friends of the User', async () => {
    const friends = await UserController.getUsersFriends('USER_01');
    should.exist(friends);
    friends.should.be.an.instanceof(Array);
    friends.length.should.be.exactly(1);
    const [friend] = friends;
    friend.should.have.property('name');
    friend.should.have.property('userId');
    friend.should.have.property('profile_pic');
  });

  it('Should be able to Get Mutual Friends of the User', async () => {
    const mutualFriends = await UserController.getMutualFriends('USER_01', 'USER_02');
    should.exist(mutualFriends);
    mutualFriends.should.be.an.instanceof(Array);
    mutualFriends.length.should.be.exactly(1);
    const [friend] = mutualFriends;
    friend.should.have.property('name');
    friend.should.have.property('userId');
    friend.should.have.property('profile_pic');
  });

  after(async () => {
    await session.close();
    await driver.close();
  });
});

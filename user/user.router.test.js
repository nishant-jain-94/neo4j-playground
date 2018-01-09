const should = require('should');
const app = require('express')();
const proxyquire = require('proxyquire');
const request = require('supertest');

const userControllerStub = {
  getUser: userId => new Promise(resolve => resolve({
    userId,
    name: 'John',
    profile_pic: 'http://blahblueblee.com/USER_01',
  })),
  getUsersFriends: () => new Promise(resolve => resolve([
    {
      userId: 'USER_02',
      name: 'Karan',
      profile_pic: 'http://blahblueblee.com/USER_02',
    },
    {
      userId: 'USER_03',
      name: 'Ali',
      profile_pic: 'http://blahblueblee.com/USER_03',
    },
  ])),
  getMutualFriends: () => new Promise(resolve => resolve([
    {
      userId: 'USER_03',
      name: 'Ali',
      profile_pic: 'http://blahblueblee.com/USER_03',
    },
  ])),
};

const userRouter = proxyquire('./user.router', {
  './user.controller': userControllerStub,
});

describe('User Router', () => {
  before(() => {
    app.use('/user', userRouter);
  });

  it('`/user/:userId` should fetch the user details', (done) => {
    request(app)
      .get('/user/USER_01')
      .expect('Content-Type', /json/)
      .expect(200)
      .end((err, res) => {
        should.not.exist(err);
        should.exist(res);
        res.should.have.property('body');
        res.body.should.be.an.Object();
        res.body.should.have.property('userId');
        res.body.should.have.property('name');
        res.body.should.have.property('profile_pic');
        done();
      });
  });

  it('`/user/:userId/friends` should fetch all the friends of the user`', (done) => {
    request(app)
      .get('/user/USER_01/friends')
      .expect('Content-Type', /json/)
      .end((err, res) => {
        should.not.exist(err);
        should.exist(res);
        res.should.have.property('body');
        res.body.should.be.an.Array();
        res.body.length.should.be.exactly(2);
        done();
      });
  });

  it('`/:user_1/:user_2/mutual should fetch mutual friends of the user`', (done) => {
    request(app)
      .get('/user/USER_01/USER_02/mutual')
      .expect('Content-Type', /json/)
      .end((err, res) => {
        should.not.exist(err);
        should.exist(res);
        res.should.have.property('body');
        res.body.should.be.an.Array();
        res.body.length.should.be.exactly(1);
        done();
      });
  });
});

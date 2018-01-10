const { session } = require('../neo4j_connection');

const getUser = async (userId) => {
  try {
    const query = `MATCH (n:user {userId: '${userId}'}) return n`;
    const result = await session.run(query);
    const [user] = result.records.map(record => record._fields[record._fieldLookup.n].properties);
    return user;
  } catch (err) {
    console.error(err);
    throw err;
  }
};

const getUsersFriends = async (userId) => {
  try {
    const query = `MATCH (:user {userId: '${userId}'})-[:friend_of]->(n) return n`;
    const result = await session.run(query);
    const friends = result.records.map(record => record._fields[record._fieldLookup.n].properties);
    return friends;
  } catch (err) {
    console.error(err);
    throw err;
  }
};

const getMutualFriends = async (userId1, userId2) => {
  try {
    const query = `MATCH (:user {userId: '${userId1}'})
      -[:friend_of]->(mutualFriend:user)<-[:friend_of]-(:user {userId: '${userId2}'})
      return mutualFriend`;
    const result = await session.run(query);
    const mutualFriends = result.records.map(record =>
      record._fields[record._fieldLookup.mutualFriend].properties);
    return mutualFriends;
  } catch (err) {
    console.log(err);
    throw err;
  }
};

module.exports = {
  getUser,
  getUsersFriends,
  getMutualFriends,
};

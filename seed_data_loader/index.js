const seedData = async (session) => {
  let seededData = {};
  try {
    const query = `
    MERGE (l:user {userId: 'USER_01', name: 'John', profile_pic: 'http://blahblueblee.com/USER_01'})
    MERGE (m:user {userId: 'USER_02', name: 'Karan', profile_pic: 'http://blahblueblee.com/USER_02'})
    MERGE (n:user {userId: 'USER_03', name: 'Ali', profile_pic: 'http://blahblueblee.com/USER_03'})
    MERGE (l)-[r1:friend_of]->(n)
    MERGE (m)-[r2:friend_of]->(n)
    return l, m, n, r1, r2
    `;
    seededData = await session.run(query);
  } catch (err) {
    throw err;
  }
  return seededData;
};

module.exports = seedData;

# Neo4j Playground [![Build Status](https://travis-ci.org/nishant-jain-94/neo4j-playground.svg?branch=master)](https://travis-ci.org/nishant-jain-94/neo4j-playground)

The primary objective of this repository is to demonstrate connection to Neo4j using NodeJS and Express.

This repository also demonstrates use of Cypher Queries in the application.

## Prerequisites

Following things are required to run this application:

1. Node 8.0 or greater
2. An instance of Neo4j. Can be either a docker-container or a standalone servver installed on the OS.

## Setup

The **first step** would be to immediately run neo4j. In this application we tend to run neo4j inside a container. In order to do that do docker-compose up inside the project folder and run it in background.

```
docker-compose up --build -d
```

The **second step** would be run npm install to install all the application dependencies.

```
npm install
```

The **third step** would be to create a **.env** file in the project folder with the following environment variables. You can replace these urls based on where your neo4j is running.

The setup doesn't distinguishes between developement, production and testing. It has same configuration for all the environment.

```
NEO4J_BOLT_CONNECTION_URL=bolt://localhost:7687
NEO4J_HTTP_CONNECTION_URL=http://localhost:7474
NEO4J_USERNAME=neo4j
NEO4J_PASSWORD=password
```

The **fourth step** would be to test the application by executing the following command.

```
npm run test
```
If the test cases pass then run npm start which should start the application server.

```
npm start
```

Now you can make http requests to the application server say
1. http://localhost:4000/user/USER_01
2. http://localhost:4000/user/USER_01/friends
3. http://localhost:4000/user/USER_01/USER_02/mutual

## Issues

Feel free to share your suggestions or problems by creating an issue.

# Neo4j Playground

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

Currently setup has two instances of neo4j running for devleopment and testing.

The ideal thing would be is to have one single config, meaning no seperate config for testing, development and production, which means we have multiple deployments like testing, development and production with each having their own **.env**

```
NEO4J_BOLT_CONNECTION_URL=bolt://localhost:7687
NEO4J_HTTP_CONNECTION_URL=http://localhost:7474
NEO4J_TEST_BOLT_CONNECTION_URL=bolt://localhost:7688
NEO4J_TEST_HTTP_CONNECTION_URL=http://localhost:7475
NEO4J_USERNAME=neo4j
NEO4J_PASSWORD=password
```

The **fourth step** would be to test the application by executing the following command.

```
npm run test
```
If all the test cases pass then it would be good thing to run npm start which should start the application server.

```
npm start
```
## Issues

Feel free to share your suggestions or problems by creating an issue.

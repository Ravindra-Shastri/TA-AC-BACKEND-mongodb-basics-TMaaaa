writeCode

Write code to:-

- create a database named `sports`.

use sports

- list all databases present in local mongod server.

show dbs

- create 3 collections named `cricket`, `football`, `TT` in sports databse.

db.createcollections('cricket', 'football', 'TT');

- add multiple players in those collections which should have fields like `name`, `age` and `email` and `bid_price`.

db.cricket.insertMany(players);

db.football.insertMany(players);

db.TT.insertMany(players);

- list all collections in sports database.

show collections

- rename `TT` collection to `tennis`.

db.TT.renameCollection('tennis');

- create a capped collection called `khokho` which should have max 3 documents.
Try inserting more than 3 and see what happens?

db.createcollections('khokho', {capped: true, size: 2048, max: 3});

db.khokho.insertMany(players);


- check whether a collection is capped or not?

db.khokho.isCapped();

- drop all documents from `football` collection.

db.football.remove({});

- delete cricket collection completely.

db.cricket.drop();

- delete sports database.

db.dropDatabase();

- check which database you are connected to ?

db

- connect to test database

use test

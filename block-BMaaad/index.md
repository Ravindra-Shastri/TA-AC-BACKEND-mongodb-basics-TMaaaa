writeCode

Write command to

- List collections from a database.

  show collections

- create a new collection in your country database which you created recently.

  use india

db.createcollection('Dharamshala');

Write code to:-

- crate a database named `weather`

    use weather

- create a capped collection named `temperature` with maximum of 3 documents and try inserting more than 3 to see the result.


db.createcollection('temperature', {capped: true, size: 1024, max: 3});

  db.temperature.insertMany([{delhi:34}, {mumbai:32}, {chennai: 45}]);

  db.temperature.insert([{dharamshala: 23}]);



- create a simple collection named `humidity`

 db.createcollection('humidity');


- check whether `temperature` collection is capped or not ?

 db.temperature.isCapped();

- Delete `humidity` collection and then the entire database(weather).

 db.humidity.drop()

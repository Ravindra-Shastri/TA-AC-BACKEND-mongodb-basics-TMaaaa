db.articles.insertMany(article);

db.articles.findOne({"author.name": "Author 1"});

db.articles.update({}, {$rename:{details: "description"}});

db.articles.update({"_id" : "objectId(5f55d02780fe5fe6311902e3)"},{$set: {title: "Intro to React and Redux"}});

db.articles.update({"title": "Intro to React and Redux"}, {$set: {"author.name": "Author 5"}});

db.articles.update({title: "Intro to Node.js"},{$push: { tags: "mongo"}});

db.articles.update({title: "Intro to Express"},{$inc: {"author.age": 5}});

db.users.find({gender: "Male", sports: "cricket"});

db.users.update({name: "Steve Ortega"}, {$push: { sports: "golf"}});

db.users.find({sports: {$in: ["football", "cricket"]}});

db.users.find({name: /ri/i});
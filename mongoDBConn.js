/**
 * Created by Frank Liang on 5/22/2017.
 */


class MongoDBConn {
	constructor {
		this.MongoClient = require('mongodb').MongoClient;
	}
	
	getUser(id){
		MongoClient.connect("mongodb://localhost:8080/TradeQ", function(err, db) {
			if(!err) {
				console.log("We are connected");
			}
			db.users.find(ObjectId(id));
		});
	}
}

MongoClient.connect("mongodb://localhost:8080/TradeQ", function(err, db) {
  if(!err) {
    console.log("We are connected");
  }
});
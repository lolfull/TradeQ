/**
 * Created by Frank Liang on 5/22/2017.
 */


function MongoDBConn(){
	this.getUser=function(id){
		var selectedUser = null;
		MongoClient.connect("mongodb://localhost:8080/TradeQ", function(err, db) {
			if(!err) {
				console.log("We are connected");
			}
            selectedUser = db.users.find(ObjectId(id));
		});

		return selectedUser;
	}

    this.getUser=function(id){
        var selectedUser = null;
        var MongoClient = require('mongodb').MongoClient;
        var assert = require('assert');
        MongoClient.connect("mongodb://localhost:8080/TradeQ", function(err, db) {
            if(!err) {
                console.log("We are connected");
            }
            selectedUser = db.users.find(ObjectId(id));
            db.close();
        });

        return selectedUser;
    }
}
var MongoClient = require('mongodb').MongoClient;

//create the database - statsdb
var url = "mongodb://localhost:27017/statsdb";

//Connect to the db
MongoClient.connect(url, {
    useNewUrlParser: true, 
    useUnifiedTopology: true
    },
    function(err, db){
        // One
        // if (err) throw err;
        //     console.log("Database created!");
        //     db.close();

        // Two
        var dbo = db.db("statsdb");
        // dbo.createCollection("uscensus", function (err, res) {
        //     if (err) throw err;
        //     console.log("Collection created!");
        //     db.close();
        // })

        // Three
        // dbo.collection("uscensus").insertMany(stats, function (err, res) {
        //     if (err) throw err;
        //     console.log("Number of documents inserted: " + res.insertedCount);
        //     db.close();
        // })

        // Four
        // var moreCustData = [{
        //     'city': 'Pacoima',
        //     'zip': '91331',
        //     'state': 'CA',
        //     'income': '60360',
        //     'age': '33'
        // }, {
        //     'city': 'Ketchikan',
        //     'zip': '99950',
        //     'state': 'AK',
        //     'income': '00000',
        //     'age': '00'
        // }];
        // dbo.collection("uscensus").insertMany(moreCustData, function (err, res) {
        //     if (err) throw err;
        //     console.log("Number of documents inserted: " + res.insertedCount);
        //     db.close();
        // })

        // Five
        // var myQuery = {
        //     city: "Corona",
        //     state: "NY"
        // };
        // dbo.collection("uscensus").find(myQuery).toArray(function (err, result) {
        //     if (err) throw err;
        //     console.log(result[0].zip);
        //     db.close();
        // })

        // Six
        // var myquery = {
        //     state: /^CA/
        // };
        // dbo.collection("uscensus").find(myquery).toArray(function (err, result) {
        //     if (err) throw err;
        //     for (i = 0; i < result.length; i++) {
        //         console.log("income " + (i+1) + " in California: " + result[i].income);
        //     }
        //     db.close();
        // })

        // Seven
        // var myquery = {
        //     state: "AK",
        // };
        // var newvalues = {
        //     $set: {
        //         income: "38910",
        //         age: "46"
        //     }
        // };
        // dbo.collection("uscensus").updateOne(myquery, newvalues, function (err, res) {
        //     if (err) throw err;
        //     console.log("1 document updated.");
        //     db.close();
        // })

        // Eight
        dbo.collection("uscensus").find().sort({
            state: 1
        }).toArray(function (err, result) {
            if (err) throw err;
            console.log("The data was sorted.")
            console.log(result);
            db.close();
        })


});

var stats =[
    {
        'city': 'San Juan', 
        'zip': '00926', 
        'state': 'PR', 
        'income': '34781',
        'age': '44'
    },
    {
        'city': 'Corona', 
        'zip': '11368', 
        'state': 'NY', 
        'income': '50797',
        'age': '32'
    },
    {
        'city': 'Chicago', 
        'zip': '60629', 
        'state': 'IL', 
        'income': '42019',
        'age': '31'
    },
    {
        'city': 'El Paso', 
        'zip': '79936', 
        'state': 'TX', 
        'income': '54692',
        'age': '31'
    },
    {
        'city': 'Los Angeles', 
        'zip': '90011', 
        'state': 'CA', 
        'income': '36954',
        'age': '28'
    },
    {
        'city': 'Norwalk', 
        'zip': '90650', 
        'state': 'CA', 
        'income': '66453',
        'age': '35'
    }
]
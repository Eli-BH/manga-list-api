const { MongoClient, ObjectID } = require("mongodb");

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));

//mogodb
//Define connection URL and Database to connect to
const connectionURL = "mongodb://127.0.0.1:27017";
const databaseName = "manga-manager";

//connect to the server
MongoClient.connect(
  connectionURL,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (error, client) => {
    //alert error
    if (error) {
      return console.log("Unable to connect to database");
    }

    const db = client.db(databaseName);
  }
);

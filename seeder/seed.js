const dotenv = require("dotenv");
const { MongoClient } = require("mongodb");

dotenv.config();

const uri = process.env.MONGO_URI;
const dbName = uri.substring(uri.lastIndexOf("/") + 1);

const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

const videos = require("./data/videos.js");
const products = require("./data/products.js");
const comments = require("./data/comments.js");

const seedMongoDB = async () => {
  try {
    await client.connect();
    const database = client.db(dbName);
    await database.dropDatabase();
    await database.collection("videos").insertMany(videos);
    await database.collection("products").insertMany(products);
    await database.collection("comments").insertMany(comments);
    console.log("MongoDB seeded successfully");
  } catch (error) {
    console.log(error);
  } finally {
    await client.close();
  }
};

seedMongoDB();

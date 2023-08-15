const { ObjectId } = require("mongodb");

const comments = [
  {
    _id: new ObjectId("64da7010e4137082d1559d54"),
    videoID: new ObjectId("64da691a0272dcabe0b9ae1d"),
    username: "Alif Mustaqim",
    comment: "Gege",
    createdAt: new Date("2023-08-14T18:18:56.686Z"),
    updatedAt: new Date("2023-08-14T18:18:56.686Z"),
  },
  {
    _id: new ObjectId("64dad4298e96d1b443c92e79"),
    videoID: new ObjectId("64dad3f9b0cb3f23a0e2e1c1"),
    username: "Paxioem",
    comment: "Menjelang ulang tahun Tokopedia",
    createdAt: new Date("2023-08-15T01:26:01.121Z"),
    updatedAt: new Date("2023-08-15T01:26:01.121Z"),
  },
  {
    _id: new ObjectId("64dad4358e96d1b443c92e7c"),
    videoID: new ObjectId("64dad3f9b0cb3f23a0e2e1c1"),
    username: "Some Guy",
    comment: "Yok gabung promo Tokopedia",
    createdAt: new Date("2023-08-15T01:26:13.599Z"),
    updatedAt: new Date("2023-08-15T01:26:13.599Z"),
  },
  {
    _id: new ObjectId("64dad46a8e96d1b443c92e84"),
    videoID: new ObjectId("64da691a0272dcabe0b9ae1d"),
    username: "John",
    comment: "Membangun mainan jembatan",
    createdAt: new Date("2023-08-15T01:27:06.818Z"),
    updatedAt: new Date("2023-08-15T01:27:06.818Z"),
  },
  {
    _id: new ObjectId("64dad4748e96d1b443c92e87"),
    videoID: new ObjectId("64da691a0272dcabe0b9ae1d"),
    username: "Lucas",
    comment: "Truckk!!",
    createdAt: new Date("2023-08-15T01:27:16.088Z"),
    updatedAt: new Date("2023-08-15T01:27:16.088Z"),
  },
  {
    _id: new ObjectId("64dad4a08e96d1b443c92e8a"),
    videoID: new ObjectId("64da691a0272dcabe0b9ae1d"),
    username: "BIBO dan Mainan",
    comment: "Truk konstruksi menyekop pasir",
    createdAt: new Date("2023-08-15T01:28:00.905Z"),
    updatedAt: new Date("2023-08-15T01:28:00.905Z"),
  },
  {
    _id: new ObjectId("64dad4af8e96d1b443c92e92"),
    videoID: new ObjectId("64dacb12b0cb3f23a0e2e1bb"),
    username: "Paxioem",
    comment: "Mantap gan",
    createdAt: new Date("2023-08-15T01:28:15.604Z"),
    updatedAt: new Date("2023-08-15T01:28:15.604Z"),
  },
  {
    _id: new ObjectId("64dad5688e96d1b443c92ec1"),
    videoID: new ObjectId("64da691a0272dcabe0b9ae1d"),
    username: "Allen",
    comment: "Toys",
    createdAt: new Date("2023-08-15T01:31:20.096Z"),
    updatedAt: new Date("2023-08-15T01:31:20.096Z"),
  },
  {
    _id: new ObjectId("64dad5758e96d1b443c92ec4"),
    videoID: new ObjectId("64da691a0272dcabe0b9ae1d"),
    username: "Glover",
    comment: "Nice toys",
    createdAt: new Date("2023-08-15T01:31:33.417Z"),
    updatedAt: new Date("2023-08-15T01:31:33.417Z"),
  },
  {
    _id: new ObjectId("64dad5848e96d1b443c92ec7"),
    videoID: new ObjectId("64da691a0272dcabe0b9ae1d"),
    username: "Year004",
    comment: "I love your videos! ",
    createdAt: new Date("2023-08-15T01:31:48.616Z"),
    updatedAt: new Date("2023-08-15T01:31:48.616Z"),
  },
  {
    _id: new ObjectId("64dad5998e96d1b443c92eca"),
    videoID: new ObjectId("64da691a0272dcabe0b9ae1d"),
    username: "Roy West",
    comment: "Bagus ",
    createdAt: new Date("2023-08-15T01:32:09.372Z"),
    updatedAt: new Date("2023-08-15T01:32:09.372Z"),
  },
  {
    _id: new ObjectId("64dad66e8e96d1b443c92f08"),
    videoID: new ObjectId("64da691a0272dcabe0b9ae1d"),
    username: "Zac",
    comment: "Lorem ipsum",
    createdAt: new Date("2023-08-15T01:35:42.479Z"),
    updatedAt: new Date("2023-08-15T01:35:42.479Z"),
  },
  {
    _id: new ObjectId("64dad6878e96d1b443c92f0b"),
    videoID: new ObjectId("64da691a0272dcabe0b9ae1d"),
    username: "Chang",
    comment: "Nice products and video",
    createdAt: new Date("2023-08-15T01:36:07.553Z"),
    updatedAt: new Date("2023-08-15T01:36:07.553Z"),
  },
];
module.exports = comments;
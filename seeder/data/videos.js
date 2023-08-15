const { ObjectId } = require("mongodb");

const videos = [
  {
    _id: new ObjectId("64da691a0272dcabe0b9ae1d"),
    title:
      "Mobil Truk Tronton Panjang Penuh Mainan Truk Oleng, Excavator, Crane, Kereta Api, Mobil Balap",
    urlThumbnail: "https://i3.ytimg.com/vi/uVG8WURqNKk/hqdefault.jpg",
    urlVideo: "https://youtu.be/uVG8WURqNKk",
    products: [
      new ObjectId("64c29c1232c0c73cf50f546c"),
      new ObjectId("64c2b5ccc43ee85ea1573e2f"),
      new ObjectId("64c335d579ae5d2dd7ea7138"),
      new ObjectId("64c2b5ac446fd948c259eb63"),
    ],
  },
  {
    _id: new ObjectId("64dacb12b0cb3f23a0e2e1bb"),
    title: "Real BUDGET Tech Gadgets UNDER $75",
    urlThumbnail: "https://i3.ytimg.com/vi/jezxearJGP0/hqdefault.jpg",
    urlVideo: "https://www.youtube.com/watch?v=jezxearJGP0",
    products: [
      new ObjectId("64dacc09d496ba159db97631"),
      new ObjectId("64dad0d98e96d1b443c92e08"),
      new ObjectId("64dad1018e96d1b443c92e10"),
      new ObjectId("64dad1a28e96d1b443c92e2a"),
      new ObjectId("64dad1ce8e96d1b443c92e32"),
      new ObjectId("64dad1fc8e96d1b443c92e36"),
      new ObjectId("64dad26c8e96d1b443c92e4d"),
    ],
  },
  {
    _id: new ObjectId("64dad2e2b0cb3f23a0e2e1be"),
    title:
      "Indonesia The Ultimate Travel Guide Best Places to Visit | Explore The Emerald of the Equator",
    urlThumbnail: "https://i3.ytimg.com/vi/204O_xorrHk/hqdefault.jpg",
    urlVideo: "https://www.youtube.com/watch?v=204O_xorrHk",
    products: [new ObjectId("64dad37d8e96d1b443c92e64")],
  },
  {
    _id: new ObjectId("64dad3f9b0cb3f23a0e2e1c1"),
    title: "Tokopedia Traktir Ultah 8-31 Agustus: Tumpuk Semua Promonya!",
    urlThumbnail: "https://i3.ytimg.com/vi/uctVGETlogU/hqdefault.jpg",
    urlVideo: "https://www.youtube.com/watch?v=uctVGETlogU",
    products: [],
  },
  {
    _id: new ObjectId("64dad508b0cb3f23a0e2e1c2"),
    title: "Amazing Egg Recipes!! Rice Balls. Gimbap. Omelets, etc. (Part 2)",
    urlThumbnail: "https://i3.ytimg.com/vi/euWL9XbzxGY/hqdefault.jpg",
    urlVideo: "https://www.youtube.com/watch?v=euWL9XbzxGY",
    products: [new ObjectId("64dad5de8e96d1b443c92ee5"), new ObjectId("64dad6018e96d1b443c92ee9")],
  },
];
module.exports = videos;

const { ObjectId } = require("mongodb");

const products = [
  {
    _id: new ObjectId("64c29c1232c0c73cf50f546c"),
    videoID: new ObjectId("64da691a0272dcabe0b9ae1d"),
    linkProduct:
      "https://www.tokopedia.com/7evenshop/mainan-edukasi-anak-mainan-pop-it-elektrik-push-bubble-game-mainan-fash-push-pink",
    title: "Mainan Edukasi Anak Mainan POP-IT Elektrik Push Bubble Game Mainan - FASH PUSH PINK",
    price: 48000,
  },
  {
    _id: new ObjectId("64c2b5ac446fd948c259eb63"),
    videoID: new ObjectId("64da691a0272dcabe0b9ae1d"),
    linkProduct:
      "https://www.tokopedia.com/rumahchiko/mainan-dump-truck-jumbo-miniatur-mobil-mobilan-truk-pasir-anak-laki-model-d?extParam=ivf%3Dfalse%26src%3Dsearch",
    title: "MOBIL TRUK PENGANGKUT MAINAN ANAK MBT 250",
    price: 50000,
  },
  {
    _id: new ObjectId("64c2b5ccc43ee85ea1573e2f"),
    videoID: new ObjectId("64da691a0272dcabe0b9ae1d"),
    linkProduct:
      "https://www.tokopedia.com/rumahchiko/mainan-dump-truck-jumbo-miniatur-mobil-mobilan-truk-pasir-anak-laki-model-d?extParam=ivf%3Dfalse%26src%3Dsearch",
    title: "Mainan Dump Truck Jumbo",
    price: 25000,
  },
  {
    _id: new ObjectId("64c335d579ae5d2dd7ea7138"),
    videoID: new ObjectId("64da691a0272dcabe0b9ae1d"),
    linkProduct:
      "https://www.tokopedia.com/mainankreatifanak/rc-mobil-mainan-rock-crawler-mobil-remote-kontrol-jeep-off-road-mainan-sneak-hijau?extParam=ivf%3Dfalse%26whid%3D20395&src=topads",
    title: "RC Mobil Mainan Rock Crawler",
    price: 57400,
  },
  {
    _id: new ObjectId("64dacc09d496ba159db97631"),
    videoID: new ObjectId("64dacb12b0cb3f23a0e2e1bb"),
    linkProduct:
      "https://www.tokopedia.com/vgenofficialstore/ssd-v-gen-128gb-256gb-512gb-1tb-sata-3-solid-state-drive-2-5-vgen-512gb",
    title: "SSD V-GeN 128GB 256GB 512GB 1TB SATA 3 Solid State Drive 2.5 VGEN - 512GB",
    price: 385000,
  },
  {
    _id: new ObjectId("64dad0d98e96d1b443c92e08"),
    videoID: new ObjectId("64dacb12b0cb3f23a0e2e1bb"),
    linkProduct:
      "https://www.tokopedia.com/jbl-official/jbl-go-3-waterproof-bluetooth-speaker-all-variant-orange",
    title: "JBL Go 3 Waterproof Bluetooth Speaker All Variant - Orange",
    price: 719000,
  },
  {
    _id: new ObjectId("64dad1018e96d1b443c92e10"),
    videoID: new ObjectId("64dacb12b0cb3f23a0e2e1bb"),
    linkProduct:
      "https://www.tokopedia.com/eggelindonesia/eggel-fit-3-waterproof-portable-bluetooth-speaker",
    title: "Eggel Fit 3 Waterproof Portable Bluetooth Speaker",
    price: 199000,
  },
  {
    _id: new ObjectId("64dad1a28e96d1b443c92e2a"),
    videoID: new ObjectId("64dacb12b0cb3f23a0e2e1bb"),
    linkProduct:
      "https://www.tokopedia.com/studioponsel/apple-airtag-airtags-original-brand-new-4-pack-kit-air-tag-tags-inter-1-pack",
    title: "Apple AirTag / Airtags Original Brand New 4 Pack Kit Air Tag tags - INTER, 1 PACK",
    price: 500000,
  },
  {
    _id: new ObjectId("64dad1ce8e96d1b443c92e32"),
    videoID: new ObjectId("64dacb12b0cb3f23a0e2e1bb"),
    linkProduct:
      "https://www.tokopedia.com/fieri-official/tas-pouch-gadget-aksesoris-travel-organizer-micro-sleeve-waterproof-putih",
    title: "Tas Pouch Gadget Aksesoris Travel Organizer Micro Sleeve Waterproof - Putih",
    price: 82000,
  },
  {
    _id: new ObjectId("64dad1fc8e96d1b443c92e36"),
    videoID: new ObjectId("64dacb12b0cb3f23a0e2e1bb"),
    linkProduct:
      "https://www.tokopedia.com/ringke/ringke-shoulder-neck-cross-body-strap-black-tali-gadget-camera-lanyard-2b53",
    title: "Ringke Shoulder Neck Cross Body Strap Black Tali Gadget Camera Lanyard",
    price: 84150,
  },
  {
    _id: new ObjectId("64dad26c8e96d1b443c92e4d"),
    videoID: new ObjectId("64dacb12b0cb3f23a0e2e1bb"),
    linkProduct: "https://www.tokopedia.com/slimnfits/oppo-a17-4-64-garansi-resmi-new-hitam",
    title: "OPPO A17 4/64 GARANSI RESMI NEW - Hitam",
    price: 1659000,
  },
  {
    _id: new ObjectId("64dad37d8e96d1b443c92e64"),
    videoID: new ObjectId("64dad2e2b0cb3f23a0e2e1be"),
    linkProduct:
      "https://www.tokopedia.com/hikemoreofficial/celana-panjang-travelling-adventure-pria-wanita-hikemore-panbel-reg-navy-m",
    title: "Celana Panjang Travelling Adventure Pria Wanita Hikemore Panbel Reg ",
    price: 149000,
  },
  {
    _id: new ObjectId("64dad5de8e96d1b443c92ee5"),
    videoID: new ObjectId("64dad508b0cb3f23a0e2e1c2"),
    linkProduct:
      "https://www.tokopedia.com/advanceofficial/advance-c-360-panci-listrik-elektrik-multifungsi-warmer-steamer-cooker",
    title: "Advance C-360 Panci Listrik Elektrik Multifungsi Warmer Steamer Cooker",
    price: 169000,
  },
  {
    _id: new ObjectId("64dad6018e96d1b443c92ee9"),
    videoID: new ObjectId("64dad508b0cb3f23a0e2e1c2"),
    linkProduct:
      "https://www.tokopedia.com/kadonioindonesia/kadonio-panci-listri-1-8l-electric-cooking-pot-memasak-multifungsi-white-smart",
    title: "Kadonio Panci Listri 1.8L Electric Cooking Pot memasak Multifungsi",
    price: 189050,
  },
];
module.exports = products;

# Tokopedia Play Clone (API / Backend Only)

A clone of Tokopedia Play (Backend) built using Node.js, Express.js, and MongoDB. This is a mid-term project of Fullstack Track in Generasi Gigih 3.0.

## **Table of Contents**

- [Database Schema](#database-schema)
- [API Structure](#api-structure)
- [API request and response](#api-request-and-response)
- [How to run in local](#how-to-run-in-local)

## **Database Schema**

- Consists of 3 collections: Video, Product, and Comment.
- Embedding products in the Video to store list of productID, the product(s) of the video.
- Choosing to only referencing videoID in the Comment document and not embedding it in the Video.

1. Video
   - \_id: ObjectID : Unique ID of the video
   - title: String : Title of the video
   - urlThumbnail: String : URL of the video thumbnail
   - urlVideo: String : URL of the video
   - products: Array of ObjectID / : List of productID (embedding), used to populate

```
{
    "_id": <ObjectID>,
    "title": String,
    "urlThumbnail": String,
    "urlVideo": String,
    "products": [<ObjectID>, <ObjectID>, ...],
}
```

2. Product
   - \_id: ObjectID : Unique ID of the product
   - videoID: ObjectID : Identifier to the video associated with the product
   - linkProduct: String : Link to the product
   - title: String : Title of the product
   - price: Number : Price of the product

```
{
    "_id": <ObjectID>,
    "videoID": <ObjectID>,
    "linkProduct": String,
    "title": String,
    "price": Number,
}
```

3. Comment
   - \_id: ObjectID : Unique ID of the product
   - videoID: ObjectID : Identifier to the video associated with the comment
   - username: String : Username of the commenter
   - comment: String : Comment text
   - createdAt: Date : Date of the comment creation
   - updatedAt: Date : Date of the comment update

```
{
    "_id": <ObjectID>,
    "videoID": <ObjectID>,
    "username": String,
    "comment": String,
    "createdAt": Date,
    "updatedAt": Date,
}
```

## **API Structure**

Start with /api/ as the base URL. There are 3 parent endpoints: /videos, /products, and /comments.

- videos
  - [GET /api/videos](#get-apivideos)
  - [GET /api/videos/:videoID](#get-apivideosvideoID)
  - [POST /api/videos](#post-apivideos)
  - [GET /api/videos/:videoID/products](#get-apivideosvideoIDproducts)
  - [GET /api/videos/:videoID/comments](#get-apivideosvideoIDcomments)
- products
  - [POST /api/products](#post-apiproducts)
- comments
  - [POST /api/comments](#post-apicomments)

## **API Request and Response**

## GET /api/videos

Returns all videos in the system.

- **URL Params**  
  None
- **Data Params**  
  None
- **Query Params**:
  - **query-search** : String : Search query to filter videos by title
- **Headers**  
  Content-Type: application/json
- **Success Response:**
- **Code:** 200
- **Content:**

```
{
  videos: [
    {<video_object>},
    {<video_object>},
    {<video_object>}
  ]
}
```

- **Error Response:**
  - **Code:** 500  
    **Content:** `{ error : error.message }`

## GET /api/videos/:videoID

Returns the specified video.

- **URL Params**  
  _Required:_ `videoID=[string]`
- **Data Params**  
  None
- **Headers**  
  Content-Type: application/json
- **Success Response:**
- **Code:** 200  
  **Content:** `{ <video_object> }` => with populated products
- **Error Response:**
  - **Code:** 400  
    **Content:** `{ error : "Invalid VideoID parameter" }`  
    OR
  - **Code:** 404  
    **Content:** `{ error : "Video doesn't exist" }`  
    OR
  - **Code:** 500  
    **Content:** `{ error : error.message }`

## **POST /api/videos**

Creates a new Video and returns the new object.

- **URL Params**  
  None
- **Headers**  
  Content-Type: application/json
- **Data Params**

```
  {
    title: String,
    urlThumbnail: String,
    urlVideo: String,
  }
```

- **Success Response:**
- **Code:** 201  
  **Content:** `{ <user_object> }`
- **Error Response:**
  - **Code:** 400  
    **Content:**
    ```
      {
        error : "Missing the following fields: *field(s)",
        emptyFields,
      }
    ```
    OR
  - **Code:** 500  
    **Content:** `{ error : error.message }`

## GET /api/videos/:videoID/products

Returns all products of the specified videoID.

- **URL Params**  
  _Required:_ `videoID=[string]`
- **Data Params**  
  None
- **Headers**  
  Content-Type: application/json
- **Success Response:**
- **Code:** 200
- **Content:**

```
{
  products: [
    {<product_object>},
    {<product_object>},
    {<product_object>}
  ]
}
```

- **Error Response:**
  - **Code:** 400  
    **Content:** `{ error : "Invalid VideoID parameter" }`  
    OR
  - **Code:** 404  
    **Content:** `{ error : "Video doesn't exist" }`  
    OR
  - **Code:** 500  
    **Content:** `{ error : error.message }`

## GET /api/videos/:videoID/comments

Returns all comments of the specified videoID.

- **URL Params**  
  _Required:_ `videoID=[string]`
- **Data Params**  
  None
- **Headers**  
  Content-Type: application/json
- **Success Response:**
- **Code:** 200
- **Content:**

```
{
  amount: Number,
  comments: [
    {<comment_object>},
    {<comment_object>},
    {<comment_object>}
  ]
}
```

- **Error Response:**
  - **Code:** 400  
    **Content:** `{ error : "Invalid VideoID parameter" }`  
    OR
  - **Code:** 404  
    **Content:** `{ error : "Video doesn't exist" }`  
    OR
  - **Code:** 500  
    **Content:** `{ error : error.message }`

## POST /api/products

Creates a new Product and returns the new object.

- **URL Params**  
  None
- **Data Params**

```
  {
    videoID: String,
    linkProduct: String,
    title: String,
    price: String,
  }
```

- **Headers**  
  Content-Type: application/json
- **Success Response:**
- **Code:** 201
- **Content:** `{ <product_object> }`
- **Error Response:**
  - **Code:** 400  
    **Content:**
    ```
      {
        error : "Missing the following fields: *field(s)",
        emptyFields,
      }
    ```
    OR
  - **Code:** 404  
    **Content:** `{ error : "Unable to add the product because the video doesn't exist" }`  
    OR
  - **Code:** 500  
    **Content:** `{ error : error.message }`

## POST /api/comments

Creates a new Comment and returns the new object.

- **URL Params**  
  None
- **Data Params**

```
  {
    videoID: String,
    username: String,
    comment: String,
  }
```

- **Headers**  
  Content-Type: application/json
- **Success Response:**
- **Code:** 201
- **Content:**

```
{
  status: "Success",
  comment: {<comment_object>}
}
```

- **Error Response:**
- **Code:** 400
  - **Content:**
  ```
    {
      status: "Fail",
      error : "Missing the following fields: *field(s)",
      emptyFields,
    }
  ```
  OR
- **Code:** 404  
  **Content:** `{ status: "Fail", error : "Unable to add the product because the video doesn't exist" }`  
  OR
- **Code:** 500  
  **Content:** `{ status: "Fail", error : error.message }`

## How to run in local

Pre-requisites: Node.js, npm, MongoDB

1. Clone the Repository
2. Open terminal to that repo then Install Dependencies

```
npm init -y
```

```
npm install
```

3. Rename **.env.example** file into **.env**
4. In **.env** file, change the value of **ORIGIN**, **MONGO_URI** to your MongoDB URI, and **PORT** to your desired port number
5. Run the server using `npm run dev`

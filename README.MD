API Documentation
This documentation provides an overview of the Person API, a simple REST API built with Express.js, Mongoose, and MongoDB for CRUD operations on a "person" resource. This API allows you to create, read, update, and delete person records.

Table of Contents
API Documentation
Table of Contents
Introduction
Getting Started
Prerequisites
Installation
Running the API
API Endpoints
Create a Person
Get a Person by ID
Update a Person
Delete a Person
Request and Response Formats
Sample Usage
Create a Person
Get a Person by ID
Update a Person
Delete a Person
Introduction
The Person API is designed to perform CRUD operations on a "person" resource. It provides endpoints for creating, retrieving, updating, and deleting person records in a MongoDB database. The API is built using Express.js and Mongoose, making it easy to use and extend.

Getting Started
Prerequisites
Before you begin, ensure you have met the following requirements:

Node.js and npm installed on your machine.
MongoDB installed and running locally, or you have a MongoDB connection URI.
Installation
Clone this repository to your local machine:

git clone https://github.com/yourusername/person-api.git
Navigate to the project directory:

cd person-api
Install the project dependencies:

npm install
Running the API
Start the MongoDB server if not already running.

Start the API by running:

node app.js
The API will be available at http://localhost:3000.

API Endpoints
Create a Person
URL: /api/persons

Method: POST

Request Body:

{
  "name": "John Doe",
}
Response:

{
  "_id": "5fd5a4f1b2f317001c5c7c64",
  "name": "John Doe",
  "__v": 0
}
Get a Person by ID
URL: /api/persons/:id

Method: GET

Response:

{
  "_id": "5fd5a4f1b2f317001c5c7c64",
  "name": "John Doe",
  "__v": 0
}
Update a Person
URL: /api/persons/:id

Method: PUT

Request Body:

{
  "name": "Updated Name",
}
Response:

{
  "_id": "5fd5a4f1b2f317001c5c7c64",
  "name": "Updated Name",
  "__v": 0
}
Delete a Person
URL: /api/persons/:id
Method: DELETE
Response: 204 No Content
Request and Response Formats
Request Format: Requests should be sent in JSON format.
Response Format: Responses are in JSON format.
Sample Usage
Here are some sample requests and responses for the Person API:

Create a Person
Request:

POST /api/persons
Content-Type: application/json

{
  "name": "Alice Johnson",
  
}
Response:

{
  "_id": "5fd5a4f1b2f317001c5c7c65",
  "name": "Alice Johnson",  
  "__v": 0
}
Get a Person by ID
Request:

GET /api/persons/5fd5a4f1b2f317001c5c7c65
Response:

{
  "_id": "5fd5a4f1b2f317001c5c7c65",
  "name": "Alice Johnson",
  "__v": 0
}
Update a Person
Request:

PUT /api/persons/5fd5a4f1b2f317001c5c7c65
Content-Type: application/json

{
  "name": "Updated Alice Johnson",
}
Response:

{
  "_id": "5fd5a4f1b2f317001c5c7c65",
  "name": "Updated Alice Johnson",
  "__v": 0
}
Delete a Person
Request:

DELETE /api/persons/5fd5a4f1b2f317001c5c7c65
Response:

204 No Content

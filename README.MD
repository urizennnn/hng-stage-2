# Person API

A simple RESTful API for managing peoples details such as name, age e.t.c.

## Table of Contents

- [Person API](#person-api)
  - [Table of Contents](#table-of-contents)
  - [Getting Started](#getting-started)
    - [Prerequisites](#prerequisites)
    - [Installation](#installation)
  - [Usage](#usage)
    - [Endpoints](#endpoints)
    - [Requests and Responses](#requests-and-responses)
  - [UML Diagram](#uml-diagram)
  - [Contribution](#contribution)
    - [License](#license)

## Getting Started

### Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js installed
- MongoDB installed and running
- Git (optional, for cloning the repository)

### Installation

1. Clone the repository (if you haven't already):

   ```bash
   git clone https://github.com/urizennnn/hng-stage-2.git
   
   ```

2. Install project dependencies:

   ```bash
   npm install

   ```

3. Configure your MongoDB connection and your port in your .env file:

   ```bash
   Port = 300
   HOST = 'http://localhost'
  MONGODB_URI = your mongo db connection string
   
   ```

4. starting your server

   ```bash
   run `npm run dev` // development server
   run `npm start` // production server
   ```

## Usage

### Endpoints

The API provides the following endpoints for managing persons:

- POST /api/create: Create a new person.

- GET /api/:id: Retrieve details of a person by ID.

- PUT /api/:id: Update details of an existing person by ID.

- DELETE /api/:id: Remove a person by ID.

- GET /api: Retrieve a list of all persons.

### Requests and Responses

1. Creating a Person:
   - Request:
  
    ```http
    POST /api
   
    {
    "name": "John Doe",
    }
   ```

   - Response (201 Created):

    ```json
    {
       
       
        "id": 1,
        "name": "John Doe"
    }

    ```

    - Response (500 Bad Request):

    ```bash
    {
      
        "message": "Internal Server Error"
    }

    or

    {
        "message": "null"
    }

    ```

2. Getting a Person by ID:
   - Request:
  
    ```http
    GET /api/user_id

    e.g GET /api/1
    ```

    - Response (200 Ok):

    ```json
    {
       
        "person": {
        "id": 1,
        "name": "John Doe",
       
        }
    }

    ```

    - Response (404 Not Found):

    ```bash
    {
        "success":false,
        "message": "Person not found"
    }

    ```

3. Getting a List of All Persons
   - Request:
  
    ```http
    GET /api

    e.g GET /api
    ```

    - Response (200 Ok):

    ```json
    {
        
        "user": [
            {
                "id": 1,
                "name": "Samson Garfield"
            },
            {
                "id": 2,
                "name": "Roosevelt Harsher"
            },
            {
                "id": 3,
                "name": "Lady gaga"
            }
        ]
    }

    ```

    - Response (404 Not Found):

    ```json
    {
        "user":[]
    }

    ```

4. Updating a Person by ID:
   - Request:
  
   ```http
    PUT /api/user_id

    e.g PUT /api/1
    {
        "name": "Updated Name",
       
    }
    ```

   - Response (200 OK)

    ```json
    {
        "user": {
            "id": 1,
            "name": "Updated Name",
            
        }
    }

    ```

   - Response (404 Not Found)

    ```json
    {
        "message":"Person not found"
    }

    ```

5. Deleting a Person by ID:
   - Request:

    ```http
    DELETE /api/user_id

    e.g. DELETE /api/1
    ```

   - Response (200 OK)

    ```json
    {
       
    }
    ```

   - Response (404 Not Found)

    ```json
    {
        "success": false,
        "message": "Person not found"
    }

    ```




## UML Diagram
  +------------------+              +-----------------------+
    |      Client      |              |      Express App      |
    +------------------+              +-----------------------+
           |                               |
           | HTTP Requests                 |
           |                               |
           V                               V
    +------------------+              +-----------------------+
    |      Routes      |              |   Controllers (CRUD)  |
    +------------------+              +-----------------------+
           |                               |
           | Route Handling                |
           |                               |
           V                               V
    +------------------+              +-----------------------+
    |      Models      |              |      Database (MongoDB)|
    +------------------+              +-----------------------+
           |                               |
           | Data Manipulation             |
           |                               |
           V                               V
    +------------------+              +-----------------------+
    |   Person Model   |              |  Person Collection    |
    +------------------+              +-----------------------+
           |                               |
           | Data Structure                |
           |                               |
           V                               V
    +------------------+              +-----------------------+
    |     Attributes   |              |    Database Records   |
    +------------------+              +-----------------------+
           |                               |
           |                               |
           |                               |
           V                               V
    +------------------+              +-----------------------+
    |      name        |              |        name           |
    |                  |              |                       |
    +------------------+              +-----------------------+
## Contribution

Contributions are welcome! Please follow the [contribution guidelines](#contribution)

### License

This project is licensed under the MIT License - see the [LICENSE](#license) file for details.

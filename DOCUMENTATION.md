

# Person CRUD API Documentation

Welcome to the Person CRUD API documentation. This API allows you to perform CRUD (Create, Read, Update, Delete) operations on a "person" resource using both the person's ID and name as parameters.


## Table of Contents

1. [Endpoint Details](#endpoint-details)
2. [Sample Usage](#sample-usage)
3. [Limitations and Assumptions](#limitations-and-assumptions)
4. [Setting Up and Deploying](#setting-up-and-deploying)

## Getting Started

1. Clone this repository to your local machine.

2. Install the required dependencies using `npm install`.

3. Start the server using `npm start`.

4. Ensure you have a MongoDB database running and set the `CONNECTION_STRING` environment variable accordingly.

5. Navigate to `http://localhost:3000/api` in your browser.

## Endpoint Details
- for remote end point please replace  `http://localhost:1234/api` with `https://hng-stage-2-w19g.onrender.com`
### Create a Person

- **Endpoint:** `POST /api`
- **Request Format:**
  - Content-Type: application/json
  - Body:
    ```json
    {
      "name": "John Doe"
    }
    ```
- **Response Format:**
  - HTTP Status: 201 Created
  - Body (Example):
    ```json
    {
      "_id": "6097f0e5720f790041471b7e",
      "name": "john doe",
      "__v": 0
    }
    ```

### Get a Person

- **Endpoint:** `GET /api/:param`
- **Request Format:** URL parameter `:param` can be either the person's ID or name.
- **Response Format:**
  - HTTP Status: 200 OK if found, 404 Not Found if not found
  - Body (Example):
    ```json
    {
      "_id": "6097f0e5720f790041471b7e",
      "name": "john doe",
      "__v": 0
    }
    ```

### Get All Persons

- **Endpoint:** `GET /api`
- **Response Format:**
  - HTTP Status: 200 OK
  - Body (Example, multiple persons):
    ```json
    [
      {
        "_id": "6097f0e5720f790041471b7e",
        "name": "john doe",
        "__v": 0
      },
      {
        "_id": "6097f0e5720f790041471b7f",
        "name": "jane smith",
        "__v": 0
      }
    ]
    ```

### Update a Person

- **Endpoint:** `PUT /api/:param`
- **Request Format:**
  - URL parameter `:param` can be either the person's ID or name.
  - Content-Type: application/json
  - Body:
    ```json
    {
      "name": "Updated Name"
    }
    ```
- **Response Format:**
  - HTTP Status: 200 OK if updated, 404 Not Found if not found
  - Body (Example):
    ```json
    {
      "_id": "6097f0e5720f790041471b7e",
      "name": "updated name",
      "__v": 0
    }
    ```

### Delete a Person

- **Endpoint:** `DELETE /api/:param`
- **Request Format:** URL parameter `:param` can be either the person's ID or name.
- **Response Format:**
  - HTTP Status: 200 OK if deleted, 404 Not Found if not found
  - Body (Example):
    ```json
    {
      "message": "Person deleted"
    }
    ```

## Sample Usage

### Create a Person

To create a new person, send a POST request to `/api` with the person's name in the request body.

Example request:
```shell
curl -X POST -H "Content-Type: application/json" -d '{"name": "John Doe"}' http://localhost:1234/api
```

### Get a Person

To get details of a person, send a GET request to `/api/:param`, replacing `:param` with either the person's ID or name.

Example requests:
```shell
# Get by ID
curl http://localhost:1234/api/6097f0e5720f790041471b7e

# Get by Name
curl http://localhost:1234/api/john%20doe
```

### Get All Persons

To get details of all persons, send a GET request to `/api`.

Example request:
```shell
curl http://localhost:1234/api
```

### Update a Person

To update a person's details, send a PUT request to `/api/:param`, replacing `:param` with either the person's ID or name, and provide the updated data in the request body.

Example requests:
```shell
# Update by ID
curl -X PUT -H "Content-Type: application/json" -d '{"name": "Updated Name"}' http://localhost:1234/api/6097f0e5720f790041471b7e

# Update by Name
curl -X PUT -H "Content-Type: application/json" -d '{"name": "Updated Name"}' http://localhost:1234/api/john%20doe
```

### Delete a Person

To delete a person, send a DELETE request to `/api/:param`, replacing `:param` with either the person's ID or name.

Example requests:
```shell
# Delete by ID
curl -X DELETE http://localhost:1234/api/6097f0e5720f790041471b7e

# Delete by Name
curl -X DELETE http://localhost:1234/api/john%20doe
```

## Limitations and Assumptions

- The API assumes that names are unique, so updating a person by name will only affect one record (the first matching name found).

## Setting Up and Deploying

1. Clone this repository to your local machine.

2. Install the required dependencies using `npm install

# Coupon Code API

This is a Node.js and Express application that provides an API for managing coupon codes. The API allows you to create, read, update, and delete coupon codes stored in a MongoDB database.

## Features

- Create new coupon codes
- Retrieve all coupon codes or a specific coupon by code
- Update existing coupon codes (e.g., mark as invalid, change expiry date)
- Delete coupon codes


## Endpoints

### 1. Create a New Coupon

- **URL**: `http://localhost:3000/api/coupons`
- **Method**: `POST`
- **Description**: Creates a new coupon.
- **Request Body**:
  - `code` (string, required): The unique code for the coupon.
  - `expiryDate` (Date, required): The expiration date of the coupon.
  - `discountAmount` (number, required): The discount amount for the coupon.
- **Response**:
  - `201 Created`: The newly created coupon.
  - `500 Internal Server Error`: An error message if the coupon could not be created.

**Example Request**:
```json
{
  "code": "SAVE20",
  "expiryDate": "2024-12-31",
  "discountAmount": 20
}
```
### 2. Get All Coupons

- **URL**: `http://localhost:3000/api/coupons`
- **Method**: `GET`
- **Description**: Retrieves all available coupons from the database.
- **Response**:
  - **200 OK**: Returns an array of all coupons in the database.
  - **500 Internal Server Error**: An error message if the coupons could not be retrieved.

### 3. Get a Coupon by Code

- **URL**: `http://localhost:3000/api/coupons/:code`
- **Method**: `GET`
- **Response**:
  - **200 OK**: Returns the coupon with the specified code.
  - **404 Not Found**: If no coupon is found with the specified code.
  - **500 Internal Server Error**: An error message if the coupon could not be retrieved.

**Example Request**:
```http
GET /api/coupons/SAVE20
```

### 4. Update a Coupon

**Endpoint:** `http://localhost:3000/api/coupons/:code`
- **Method**: `PUT`


#### Request Body

The request body should contain the updated coupon details in JSON format. For example:

```json
{
  "discount": 20,
  "expiresAt": "2024-12-31"
}
```
### 5. Delete a Coupon

**Endpoint:** `http://localhost:3000/api/coupons/:code`
- **Method**: `DELETE`





## Set Up Environment Variables

Create a `.env` file in the root directory of your project and add your environment variables. Below is an example `.env` file:

**Example `.env` file:**
```env

PORT=3000
MONGO_URI=mongodb://localhost:27017/defaultdb


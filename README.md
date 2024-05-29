# NESTjs CRUD Application with PostgreSQL

This is a basic NESTjs application to manage a PostgreSQL database with two tables: `Users` and `WalletAddress`. It includes CRUD operations for both tables.

## Objective

Develop a basic NESTjs application to manage a PostgreSQL database with two tables: `Users` and `WalletAddress`. Implement CRUD operations for these tables.

## Requirements

- Basic CRUD operations for `Users` and `WalletAddress` tables.
- Input validation to ensure data integrity.
- Basic error handling and appropriate responses.
- Documentation for API endpoints and setup instructions.

## NESTjs Application Setup
1. Clone the repository:
    `git clone https://github.com/neerajkumar4/Catoff_Assgn.git`
    `cd Catoff_Assgn`
2. Install the dependencies:
    `npm install`
3. Update your `.env` file with the database connection details:
    ```
    DATABASE_HOST=localhost
    DATABASE_PORT=5432
    DATABASE_USER=your_db_user
    DATABASE_PASSWORD=Nere@1234
    DATABASE_NAME=catoff_assgn 
    ```
4. Run the application:
    `npm run start:dev`
## API Endpoints
###     Users
1.  Create a User->
        Method: POST
        URL: `/users` 
        Body: ```
        {
            "name": "John Doe",
            "email": "john.doe@example.com",
            "password": "securepassword"
        }
        ``` 
2. Get All Users->
        Method: GET
        URL: `/users`
3. Get a Single User->
        Method: GET
        URL:`/users/{id}`
4.  Update a User->
        Method: PUT
        URL: `/users/{id}`  
        Body: ```
        {
            "name": "John Doe",
            "email": "john.doe@example.com",
            "password": "anotherpassword"
        }
        ``` 
3. Delete a User->
        Method: DELETE
        URL:`/users/{id}`

###     WalletAddress
1.  Create a Wallet Address->
        Method: POST
        URL: `/wallet-address` 
        Body: ```
        {
            "user_id": 1,
            "address": "0x123456789abcdef"
        }
        ``` 
2. Get All Wallet Addresses->
        Method: GET
        URL: `/wallet-address`
3. Get a Single Wallet Address->
        Method: GET
        URL:`/wallet-address/{id}`
4.  Update a Wallet Address->
        Method: PUT
        URL: `/wallet-address/{id}`  
        Body: ```
        {
            "user_id": 1,
            "address": "0xabcdef123456789"    
        }
        ``` 
3. Delete a Wallet Address->
        Method: DELETE
        URL:`/wallet-address/{id}`

## Validation
Basic validation is implemented using class-validator decorators in the DTOs to ensure data integrity.

## Error Handling
The application includes basic error handling to provide appropriate responses for common errors such as not found and validation errors.

## Testing
Use tools like Postman or curl to test the API endpoints. Ensure the application is running and the database is properly connected.

## Code Quality
The code follows basic NESTjs conventions and is well-commented to ensure readability and maintainability.

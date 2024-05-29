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
    DATABASE_HOST=localhost
    DATABASE_PORT=5432
    DATABASE_USER=your_db_user
    DATABASE_PASSWORD=Nere@1234
    DATABASE_NAME=catoff_assgn
4. Run the application:
    `npm run start:dev`

## Validation
Basic validation is implemented using class-validator decorators in the DTOs to ensure data integrity.

## Error Handling
The application includes basic error handling to provide appropriate responses for common errors such as not found and validation errors.

## Testing
Use tools like Postman or curl to test the API endpoints. Ensure the application is running and the database is properly connected.

## Code Quality
The code follows basic NESTjs conventions and is well-commented to ensure readability and maintainability.

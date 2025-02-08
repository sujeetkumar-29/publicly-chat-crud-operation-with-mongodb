# Publicly Chat CRUD Operation with MongoDB

This project demonstrates a basic CRUD (Create, Read, Update, Delete) operation for a public chat application, integrated with MongoDB as the database. The project showcases essential backend functionalities for managing chat messages.

## Features
- **Create:** Add new chat messages to the database.
- **Read:** Retrieve all chat messages or specific ones.
- **Update:** Edit existing chat messages.
- **Delete:** Remove chat messages from the database.

## Tech Stack
- **Backend:** Node.js, Express.js
- **Database:** MongoDB

## Prerequisites
Make sure you have the following installed on your system:
- [Node.js](https://nodejs.org/) (v14 or higher)
- [MongoDB](https://www.mongodb.com/try/download/community)
- npm (Node Package Manager)

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/sujeetkumar-29/publicly-chat-crud-operation-with-mongodb.git
   ```

2. Navigate to the project directory:
   ```bash
   cd publicly-chat-crud-operation-with-mongodb
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Start the server:
   ```bash
   npm start
   ```

5. The server will be running at `http://localhost:8080`.


## Project Structure
```
publicly-chat-crud-operation-with-mongodb/
├── server.js         # Entry point of the application
├── routes/            # API route definitions
├── models/            # Mongoose schemas and models
├── controllers/       # Controller logic for CRUD operations
```

## Usage
- Use Postman or any API client to test the endpoints.
- Ensure MongoDB is running locally or provide a cloud-based MongoDB URI.

## License
This project is licensed under the MIT License.

## Author
[Sujeet Kumar](https://github.com/sujeetkumar-29)

## Contributions
Contributions are welcome! Feel free to submit a pull request or open an issue for suggestions and improvements.


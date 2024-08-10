# Notes App Backend

This is a simple backend for a Notes application built using Node.js, Express, and MySQL. The API allows you to create, retrieve, update, and delete notes with a title and content. API testing was done using Thunder Client.

## Features

- **Create a Note:** Add a new note with a title and content.
- **Retrieve Notes:** Get a list of all notes or a specific note by ID.
- **Update a Note:** Modify the title or content of an existing note.
- **Delete a Note:** Remove a note by its ID.

## Tech Stack

- **Node.js**
- **Express**
- **MySQL**
- **Thunder Client** (for API testing)

## Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/yourusername/notes-app-backend.git
    cd notes-app-backend
    ```

2. Install dependencies:

    ```bash
    npm install
    ```

3. Set up the MySQL database:

    - Create a database for the app.
    - Update the `config.js` file with your MySQL credentials and database name.

4. Run the application:

    ```bash
    npm start
    ```

5. The server will start on `http://localhost:3000`.

## API Endpoints

- **GET /notes:** Retrieve all notes.
- **GET /notes/:id:** Retrieve a specific note by ID.
- **POST /notes:** Create a new note.
- **PUT /notes/:id:** Update an existing note by ID.
- **DELETE /notes/:id:** Delete a note by ID.

## Testing

You can test the API using Thunder Client or any other API testing tool.

## License

This project is licensed under the MIT License.

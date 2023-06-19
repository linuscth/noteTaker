# NoteTaker

This is a simple Express.js API that allows users to manage notes. It provides endpoints for retrieving, creating, and deleting notes. The notes are stored in a JSON file (db.json) on the server.

## Getting Started
You can either go to the https://salty-journey-19960-0ed098d08994.herokuapp.com/
or follow the bellow steps to test out the notetaker . 

1. Clone this repository to your local machine or download the source code.

2. Open a terminal or command prompt and navigate to the project directory.

3. Install the dependencies by running the following command: "npm i".

4. Start the application using the following comman "npm run start"



## API Endpoints

 The following API endpoints are available:

- GET /api/notes: Retrieves all the notes from the db.json file and returns them as a JSON response.

- POST /api/notes: Creates a new note based on the data provided in the request body. The note must include a title and text property. A unique ID is generated for the note using uuidv4(). The new note is then added to the existing notes in the db.json file.

- DELETE /api/notes/:id: Deletes the note with the specified id parameter from the db.json file.

- GET /notes: to go to the notes.html for typing notes
- GET /*: the wild card for any invalid middleware, and return the index.html file


## url:
> heroku deployed url: https://salty-journey-19960-0ed098d08994.herokuapp.com/Links to an external site.

> github repo url: https://github.com/linuscth/noteTakerLinks to an external site.

## Screenshots:
![screenshot1 for the application](./public/assets/Screen%20Shot%202023-06-18%20at%206.44.29%20PM.png)
![screenshot2 for the application](./public/assets/Screen%20Shot%202023-06-18%20at%206.45.25%20PM.png)

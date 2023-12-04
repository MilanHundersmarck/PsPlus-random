

# Random PS PLUS Game Selector

Welcome to the Random PS PLUS Game Selector repository! This project provides a web application and an API that allow users to randomly select a game from the PS PLUS Extra catalogue. The data is scraped from the official PlayStation website [here](https://www.playstation.com/nl-nl/ps-plus/games/).

**Demo: [randomgame.milanhundersmarck.nl](http://randomgame.milanhundersmarck.nl/)**

## Disclaimer
This project is currently in a very early stage of development.

Please be aware that certain features might not work as intended, and the project may undergo significant changes. For a list of planned features, please refer to the [TODO.md](TODO.md) file in the repository

## Installation

To run the Random PS PLUS Game Selector locally, follow these steps:

1.  Clone the repository to your local machine:

```bash
git clone https://github.com/MilanHundersmarck/PsPlus-random.git
```

2.  Navigate to the project directory:

```bash
cd PsPlus-random
```

3.  Install the dependencies:

```bash
npm install
```

4.  Start the Express app:

```
npm start
```

5.  Open your web browser and go to [http://localhost:3000](http://localhost:3000/) to access the web application.

## Usage

### Web Application

1.  Navigate to [http://localhost:3000](http://localhost:3000/) in your web browser.
2.  Click on the "Generate" button to get a random game from the catalogue.

### API

The API can be accessed at [http://localhost:3000/api/games](http://localhost:3000/api/games). Make a GET request to this endpoint to receive a JSON response with a list of all the Ps plus games.

Example:

```bash
curl http://localhost:3000/api/games
```

Happy gaming! 🎮

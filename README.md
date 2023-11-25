# Pokémon Evolution Chain API

This Node.js application fetches and processes Pokémon evolution chain data using the PokeAPI. It exposes an Express API endpoint that allows users to retrieve the evolution chain of a specific Pokémon.

## Getting Started

Follow these steps to run the application locally:

1. **Prerequisites:**

   - Make sure you have Node.js and npm installed on your machine.
     - [Node.js](https://nodejs.org/)
     - [npm](https://www.npmjs.com/)

2. **Installation:**

   - Clone the repository:
     ```bash
     git clone https://github.com/ALIHASSAN65/pokemon.git
     ```
   - Navigate to the project directory:
     ```bash
     cd pokemon
     ```
   - Install the dependencies:
     ```bash
     npm install
     ```

3. **Usage:**

   - Start the server:
     ```bash
     node index.js
     ```
   - Open your web browser and visit [http://localhost:3000/evolution-chain/{pokemon_name}](http://localhost:3000/evolution-chain/{pokemon_name})
     - Replace `{pokemon_name}` with the name of the Pokémon you want to query. For example, to get the evolution chain of Squirtle, use [http://localhost:3000/evolution-chain/squirtle](http://localhost:3000/evolution-chain/squirtle)

4. **API Endpoint:**
   - **GET /evolution-chain/{pokemon_name}:** Retrieve the evolution chain of the specified Pokémon.

## Additional Notes

- The application uses the PokeAPI to fetch Pokémon data. Ensure that you have a stable internet connection to make API requests.
- Error handling is implemented to handle cases where the specified Pokémon is not found or if there is an internal server error.

## Acknowledgments

- [PokeAPI](https://pokeapi.co/) - The Pokémon API used in this project.

Feel free to explore and enhance the application based on your requirements! If you encounter any issues or have suggestions for improvements, please open an issue on the repository.

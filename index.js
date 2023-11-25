const express = require("express");
const app = express();
const axios = require("axios");

// Function to fetch and process Pokemon evolution chain
async function getEvolutionChain(pokemonName) {
  try {
    // Step 1: Get the Pokemon data
    const pokemonResponse = await axios.get(
      `https://pokeapi.co/api/v2/pokemon/${pokemonName.toLowerCase()}`
    );
    const pokemonData = pokemonResponse.data;

    // Step 2: Get the Pokemon species data
    const speciesResponse = await axios.get(pokemonData.species.url);
    const speciesData = speciesResponse.data;

    // Step 3: Get the evolution chain data
    const evolutionChainResponse = await axios.get(
      speciesData.evolution_chain.url
    );
    const evolutionChainData = evolutionChainResponse.data;

    // Step 4: Process the evolution chain data recursively
    const evolutionChain = processEvolutionChain(evolutionChainData.chain);

    // Step 5: Convert the result to a JSON string
    const evolutionChainJSON = JSON.stringify(evolutionChain, null, 2);

    return evolutionChainJSON;
  } catch (error) {
    // console.error("Error:", error.message);
    if (error.status == "404") return { data: [] };
    return null;
  }
}

// Recursive function to process evolution chain data
function processEvolutionChain(chain) {
  const result = {
    name: chain.species.name,
    variations: [],
  };

  if (chain.evolves_to && chain.evolves_to.length > 0) {
    // Process variations recursively
    result.variations = chain.evolves_to.map((variation) =>
      processEvolutionChain(variation)
    );
  }

  return result;
}

// Express route for fetching Pokemon evolution chain
app.get("/evolution-chain/:name", async (req, res, next) => {
  try {
    // Example usage
    let { params } = req;
    // const pokemonName = req||"squirtle";
    const pokemonName = params.name;

    // Fetch and send evolution chain data as JSON response
    const evolutionChain = await getEvolutionChain(pokemonName);
    if (evolutionChain) {
      //   console.log(evolutionChain);
      res.json(evolutionChain);
    } else {
      res.status(500).json({ error: "Record Not Found" });
    }
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Start the Express server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

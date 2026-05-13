import { PokemonSheet } from "./pokemon-sheet.mjs";

Hooks.once("init", async function () {

  console.log("Explorers PMD System | Initializing");

  Actors.unregisterSheet("core", ActorSheet);

  Actors.registerSheet(
    "explorers-pmd",
    PokemonSheet,
    {
      types: ["pokemon"],
      makeDefault: true
    }
  );
});
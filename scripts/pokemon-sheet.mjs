export class PokemonSheet extends ActorSheet {

  static get defaultOptions() {
    return foundry.utils.mergeObject(super.defaultOptions, {
      classes: ["explorers-pmd", "sheet", "actor"],
      template: "systems/explorers-pmd/templates/actor/pokemon-sheet.hbs",
      width: 600,
      height: 700
    });
  }

  getData() {
    const context = super.getData();

    context.system = this.actor.system;

    return context;
  }
}
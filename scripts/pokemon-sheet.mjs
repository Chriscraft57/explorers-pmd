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
    context.actor = this.actor;
    context.system = this.actor.system;
    return context;
  }

  activateListeners(html) {
    super.activateListeners(html);
    html.find('.file-picker').click(this._onBrowseImage.bind(this));
  }

  _onBrowseImage(event) {
    event.preventDefault();
    const input = event.currentTarget.closest('.pmd-image-picker').querySelector('input[name="actor-img"]');
    if (!input) return;
    return FilePicker.browse('image', input.value || 'icons/svg/mystery-man.svg', (path) => {
      input.value = path;
      this.actor.update({img: path});
    });
  }
}
ServerEvents.tags('item', event => {
    // Add your item to the smithing templates tag if needed by your version/modpack
    event.add('minecraft:smithing_templates', 'kubejs:steeleaf_upgrade_smithing_template');
})
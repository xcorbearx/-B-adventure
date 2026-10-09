ItemEvents.tooltip(event => {
    event.addAdvanced('minecraft:netherite_upgrade_smithing_template', (item, advanced, text) => {
        text.remove(1)
        text.add(1, Text.gray('Tier 1: Netherite'))
    })
})
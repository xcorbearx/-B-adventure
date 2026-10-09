ServerEvents.recipes(event => {
    event.shaped(
        Item.of('kubejs:steeleaf_upgrade_smithing_template'),
        [
            'BBB',
            'BTB',
            'BBB'
        ],
        {
            D: 'minecraft:diamond',
            B: 'twilightforest:steeleaf_ingot',
            T: 'minecraft:netherite_upgrade_smithing_template'
        }
    );
});
ItemEvents.tooltip(event => {
    // Replace 'kubejs:custom_template' with your actual custom item ID
    event.addAdvanced('kubejs:steeleaf_upgrade_smithing_template', (item, advanced, text) => {
                    
        text.add(1, Text.gray('Tier 4: Steeleaf'));

        text.add(2, Text.of('')); 
        
        text.add(3, Text.gray('Applies to:'));
        
        text.add(4, Text.blue(' Utherium Gear'));
        
        text.add(5, Text.gray('Ingredients:'));
        
        text.add(6, Text.blue(' Steeleaf Ingot'));
    });
});
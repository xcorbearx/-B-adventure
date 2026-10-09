ServerEvents.recipes(event => {
    const TEMPLATE = 'kubejs:steeleaf_upgrade_smithing_template';
    const UPGRADE_MATERIAL = 'twilightforest:steeleaf_ingot';
    const upgradeMap = [
        {base: 'undergarden:utherium_helmet',     result: 'twilightforest:steeleaf_helmet' },
        {base: 'undergarden:utherium_chestplate', result: 'twilightforest:steeleaf_chestplate' },
        {base: 'undergarden:utherium_leggings',   result: 'twilightforest:steeleaf_leggings' },
        {base: 'undergarden:utherium_boots',      result: 'twilightforest:steeleaf_boots' },
        {base: 'undergarden:utherium_sword',      result: 'twilightforest:steeleaf_sword' },
        {base: 'undergarden:utherium_pickaxe',    result: 'twilightforest:steeleaf_pickaxe' },
        {base: 'undergarden:utherium_axe',        result: 'twilightforest:steeleaf_axe' },
        {base: 'undergarden:utherium_shovel',     result: 'twilightforest:steeleaf_shovel' },
        {base: 'undergarden:utherium_hoe',        result: 'twilightforest:steeleaf_hoe' },
        {base: 'knavesneeds:undergarden/utherium/longsword',        result: 'knavesneeds:twilight_forest/steeleaf/longsword' },
        {base: 'knavesneeds:undergarden/utherium/katana',        result: 'knavesneeds:twilight_forest/steeleaf/katana' },
        {base: 'knavesneeds:undergarden/utherium/claymore',        result: 'knavesneeds:twilight_forest/steeleaf/claymore' },
        {base: 'knavesneeds:undergarden/utherium/twinblade',        result: 'knavesneeds:twilight_forest/steeleaf/twinblade' },
        {base: 'knavesneeds:undergarden/utherium/sai',        result: 'knavesneeds:twilight_forest/steeleaf/sai' },
        {base: 'knavesneeds:undergarden/utherium/rapier',        result: 'knavesneeds:twilight_forest/steeleaf/rapier' },
        {base: 'knavesneeds:undergarden/utherium/spear',        result: 'knavesneeds:twilight_forest/steeleaf/spear' },
        {base: 'knavesneeds:undergarden/utherium/glaive',        result: 'knavesneeds:twilight_forest/steeleaf/glaive' },
        {base: 'knavesneeds:undergarden/utherium/warglaive',        result: 'knavesneeds:twilight_forest/steeleaf/warglaive' },
        {base: 'knavesneeds:undergarden/utherium/cutlass',        result: 'knavesneeds:twilight_forest/steeleaf/cutlass' },
        {base: 'knavesneeds:undergarden/utherium/greathammer',        result: 'knavesneeds:twilight_forest/steeleaf/greathammer' },
        {base: 'knavesneeds:undergarden/utherium/greataxe',        result: 'knavesneeds:twilight_forest/steeleaf/greataxe' },
        {base: 'knavesneeds:undergarden/utherium/chakram',        result: 'knavesneeds:twilight_forest/steeleaf/chakram' },
        {base: 'knavesneeds:undergarden/utherium/scythe',        result: 'knavesneeds:twilight_forest/steeleaf/scythe' },
        {base: 'knavesneeds:undergarden/utherium/halberd',        result: 'knavesneeds:twilight_forest/steeleaf/halberd' },
    ];
    upgradeMap.forEach(upgrade => {
        let itemName = upgrade.base.substring(upgrade.base.indexOf(':') + 1);
        event.smithing(
            upgrade.result,
            TEMPLATE,
            upgrade.base,
            UPGRADE_MATERIAL
        ).id(`kubejs:smithing/steeleaf_upgrade_${itemName}`);
    });
});
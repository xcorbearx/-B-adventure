ServerEvents.recipes(event => {
    const TEMPLATE = 'undergarden:forgotten_upgrade_smithing_template';
    const UPGRADE_MATERIAL = 'undergarden:utherium_crystal';
    const upgradeMap = [
        {base: 'deeperdarker:warden_helmet',     result: 'undergarden:utherium_helmet' },
        {base: 'deeperdarker:warden_chestplate', result: 'undergarden:utherium_chestplate' },
        {base: 'deeperdarker:warden_leggings',   result: 'undergarden:utherium_leggings' },
        {base: 'deeperdarker:warden_boots',      result: 'undergarden:utherium_boots' },
        {base: 'deeperdarker:warden_sword',      result: 'undergarden:utherium_sword' },
        {base: 'deeperdarker:warden_pickaxe',    result: 'undergarden:utherium_pickaxe' },
        {base: 'deeperdarker:warden_axe',        result: 'undergarden:utherium_axe' },
        {base: 'deeperdarker:warden_shovel',     result: 'undergarden:utherium_shovel' },
        {base: 'deeperdarker:warden_hoe',        result: 'undergarden:utherium_hoe' },
        {base: 'knavesneeds:deeperdarker/warden/longsword',        result: 'knavesneeds:undergarden/utherium/longsword' },
        {base: 'knavesneeds:deeperdarker/warden/katana',        result: 'knavesneeds:undergarden/utherium/katana' },
        {base: 'knavesneeds:deeperdarker/warden/claymore',        result: 'knavesneeds:undergarden/utherium/claymore' },
        {base: 'knavesneeds:deeperdarker/warden/twinblade',        result: 'knavesneeds:undergarden/utherium/twinblade' },
        {base: 'knavesneeds:deeperdarker/warden/sai',        result: 'knavesneeds:undergarden/utherium/sai' },
        {base: 'knavesneeds:deeperdarker/warden/rapier',        result: 'knavesneeds:undergarden/utherium/rapier' },
        {base: 'knavesneeds:deeperdarker/warden/spear',        result: 'knavesneeds:undergarden/utherium/spear' },
        {base: 'knavesneeds:deeperdarker/warden/glaive',        result: 'knavesneeds:undergarden/utherium/glaive' },
        {base: 'knavesneeds:deeperdarker/warden/warglaive',        result: 'knavesneeds:undergarden/utherium/warglaive' },
        {base: 'knavesneeds:deeperdarker/warden/cutlass',        result: 'knavesneeds:undergarden/utherium/cutlass' },
        {base: 'knavesneeds:deeperdarker/warden/greathammer',        result: 'knavesneeds:undergarden/utherium/greathammer' },
        {base: 'knavesneeds:deeperdarker/warden/greataxe',        result: 'knavesneeds:undergarden/utherium/greataxe' },
        {base: 'knavesneeds:deeperdarker/warden/chakram',        result: 'knavesneeds:undergarden/utherium/chakram' },
        {base: 'knavesneeds:deeperdarker/warden/scythe',        result: 'knavesneeds:undergarden/utherium/scythe' },
        {base: 'knavesneeds:deeperdarker/warden/halberd',        result: 'knavesneeds:undergarden/utherium/halberd' },
    ];
    upgradeMap.forEach(upgrade => {
        let itemName = upgrade.base.substring(upgrade.base.indexOf(':') + 1);
        event.smithing(
            upgrade.result,
            TEMPLATE,
            upgrade.base,
            UPGRADE_MATERIAL
        ).id(`kubejs:smithing/utherium_upgrade_${itemName}`);
    });
});
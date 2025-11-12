// priority: 0

// Visit the wiki for more info - https://kubejs.com/

StartupEvents.registry('item', event => {
    // The texture for this item has to be placed in kubejs/assets/kubejs/textures/item/test_item.png
    // If you want a custom item model, you can create one in Blockbench and put it in kubejs/assets/kubejs/models/item/test_item.json


    // You can chain builder methods as much as you like
    event.create('c_coin')
    .texture('coin:item/face')
    .maxStackSize(100)
    .glow(true)
    .tooltip('Cha-ching!')
    .displayName('Coin')

    // You can specify item type as 2nd argument in create(), some types have different available methods
  
})
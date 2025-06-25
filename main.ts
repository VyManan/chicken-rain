player.onItemInteracted(IRON_PICKAXE, function () {
    mobs.spawn(CHICKEN, pos(25, 45, 80))
})
player.onChat("run", function (_6) {
    blocks.place(GLASS, pos(2, 2, 4))
})
player.onChat("jump", function () {
	
})
blocks.place(LAPIS_LAZULI_BLOCK, pos(32, 45, 65))

Events.on(WorldLoadEvent, () => {
    if (Vars.state.map.name().toLowerCase().startsWith("bomberman")) {
        UnitTypes.nova.canBoost = false
    } else {
        UnitTypes.nova.canBoost = true
    }
})

Events.on(ClientLoadEvent, () => Timer.schedule(() => {
    if (Vars.state.map != null && Vars.state.map.name().toLowerCase().startsWith("bomberman")) {
        UnitTypes.nova.canBoost = false
    } else {
        UnitTypes.nova.canBoost = true
    }
}, 5, 5))

window.PokiSDK = {
    init() {
        return Promise.resolve();
    },

    gameplayStart() {},

    gameplayStop() {},

    gameLoadingFinished() {},

    setDebug() {},

    // Anuncio normal
    commercialBreak(callback) {
        if (typeof callback === "function") {
            callback();
        }
        return Promise.resolve();
    },

    // Anuncio recompensado
    rewardedBreak(callback) {
        if (typeof callback === "function") {
            callback(true); // Simula que el usuario vio el anuncio
        }
        return Promise.resolve(true);
    }
};

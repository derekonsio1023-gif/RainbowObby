window.PokiSDK = {
    init() {
        return Promise.resolve();
    },

    gameplayStart() {
        console.log("PokiSDK: gameplayStart");
    },

    gameplayStop() {
        console.log("PokiSDK: gameplayStop");
    },

    gameLoadingFinished() {
        console.log("PokiSDK: gameLoadingFinished");
    },

    setDebug(enabled) {
        console.log("PokiSDK: debug =", enabled);
    }
};

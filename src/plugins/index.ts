import HideAdBanners from "./HideAdBanners";
import HideUpgradeButton from "./HideUpgradeButton";
import RemoveAdiFrames from "./RemoveAdiFrames";
import SPDMWatermark from "./SPDMWatermark";

import $ = require('jquery');
import SPDMAvatarInjection from "./SPDMAvatarMenuInjection";
import Clock from "./Clock";

export interface SpotifyPlugin {
    NAME: string,
    DESCRIPTION: string,
    enabled: boolean,
    load(): void
}

export default class SpotifyPluginLoader {

    private static plugins: SpotifyPlugin[] = [];

    public static loadPlugins() {
        this.plugins.push(new SPDMWatermark());
        this.plugins.push(new SPDMAvatarInjection());
        this.plugins.push(new HideUpgradeButton());
        this.plugins.push(new RemoveAdiFrames());
        this.plugins.push(new HideAdBanners());
        this.plugins.push(new Clock());

        this.plugins.forEach(plugin => {
            plugin.load();
        })
    }

}
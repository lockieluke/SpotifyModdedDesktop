import { getElementByXpath } from './internal-dom-helper';

export enum SpotifyDOM {
    UpgradeButton = `//*[@id="main"]/div/div[2]/div[1]/header/button[1]`
}

export function getSpotifyDOM(domName: SpotifyDOM): HTMLElement {
    return getElementByXpath(domName.toString()) as HTMLElement;
}
import { SPDM } from "./authInfo";

declare let spdm: SPDM;

export interface ISPDMPrefKeys {
    hidePremiumBtn: boolean,
}

export default class SPDMPrefs {

    public static init() {
        spdm.prefs = {
            hidePremiumBtn: true
        };
        if (window.sessionStorage.getItem('spdm-prefs')) {
            spdm.prefs = JSON.parse(window.sessionStorage.getItem('spdm-prefs'));
        }

    }

    public static set(prefs: Partial<ISPDMPrefKeys>) {
        spdm = {
            ...spdm,
            ...prefs
        };
    }

    public static get() {
        return spdm.prefs;
    }

}
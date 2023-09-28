import { Navigation, Set, Translation, Transliteration } from "./page.interface";

export interface Verse {
    verseId: number,
    shabadId: number,
    verse: Set,
    larivaar: Set,
    translation: Translation,
    transliteration: Transliteration,
    pageNo: number,
    lineNo: number,
    updated: string,
    visraam: any,
}

export interface Shabad {
    shabadInfo: any,
    count: number,
    navigation: Navigation,
    verses: Verse[]
}
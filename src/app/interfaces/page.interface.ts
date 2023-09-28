interface Source {
    sourceId: string,
    gurmukhi: string,
    unicode: string,
    englidh: string,
    pageNo: number
}

export interface Navigation {
    previous: number | null,
    next: number | null
}

export interface Set {
    gurmukhi: string,
    unicode: string
}

export interface Translation {
    en: {
        bdb: string
    }
}

export interface Transliteration {
    english: string,
    en: string
}

export interface Line {
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
    writer: any,
    raag: any,
}

export interface PageResult {
    source: Source,
    count: number,
    navigation: Navigation,
    page: Line[]
}
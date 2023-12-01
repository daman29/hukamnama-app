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
    gurmukhi: string | null,
    unicode: string | null
}

export interface Translation {
    en: {
        bdb?: string,
        ms?: string,
        ssk?: string
    },
    pu: {
        ss?: Set,
        ft?: Set,
        bdb?: Set,
        ms?: Set
    },
    es: {
        sn?: string
    },
    hi: {
        ss?: string,
        sts?: string
    }
}

export interface Transliteration {
    english?: string,
    en?: string,
    hindi?:string,
    hi?:string,
    ipa?:string,
    ur?:string
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
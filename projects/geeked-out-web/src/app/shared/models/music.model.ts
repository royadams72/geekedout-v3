export interface Albums {
    album_type: string;
    artists: Artist[];
    available_markets: Array<string>;
    external_urls: ExternalUrls;
    href: string;
    id: string;
    images: Images[];
    name: string;
    release_date: string;
    release_date_precision: string;
    total_tracks: number;
    type: string;
    uri: string;
}

export interface Images {
    height: number; url: string; width: number;
}

export interface ExternalUrls {
    spotify: string;
}

export interface Artist {
    external_urls: ExternalUrls;
    href: string;
    id: string;
    name: string;
    type: string;
    uri: string;
}

export interface MusicResponse {
    href: string;
    items: Albums[];
    limit: number;
    next: string;
    offset: number;
    previous: number;
    total: number;
}


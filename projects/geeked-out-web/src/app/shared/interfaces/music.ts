export interface Albums {
    album_type: string;
    artists: Artists[];
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

export interface Artists {
    external_urls: ExternalUrls;
    href: string;
    id: string;
    name: string;
    type: string;
    uri: string;
}
export interface AlbumDetail {
    name: string;
    artists: ArtistDetails[];
    release_date: string;

}
export interface ArtistDetails {
    name: string;
    spotifyUrl: string;
}
export interface MusicStore {
    href: string;
    items: Albums[];
    limit: number;
    next: string;
    offset: number;
    previous: number;
    total: number;
}


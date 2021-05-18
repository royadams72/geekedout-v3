import { SetKeyAsString } from "./set-key-as-string"
export interface KeyValueDict<T> {
    [key: string]: T;
  }
export interface Albums {
    album_type: string;
    artists: Artists[];
    available_markets: Array<string>;
    copyrights: Array<{}>;
    external_ids: object;
    external_urls: ExternalUrls;
    genres: [];
    href: string;
    id: string;
    images: Images[];
    name: string;
    popularity: number;
    release_date: string;
    release_date_precision: string;
    total_tracks: number;
    tracks: Tracks;
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

export interface Tracks {
    href: string;
    items: [{
        artists: [{
            external_urls: {
                spotify: string
            };
            href: string;
            id: string;
            name: string;
            type: string;
            uri: string
        }];
        available_markets: Array<string>;
        disc_number: number;
        duration_ms: number;
        explicit: boolean;
        external_urls: {
            spotify: string;
        };
        href: string;
        id: string;
        is_local: boolean;
        name: string;
        track_number: number;
        type: string;
        uri: string;
    }],
    limit: number;
    next: number | null;
    offset: number;
    previous: number | null;
    total: number;
}

// {
//     "album_type": "album",
//     "artists": [{
//         "external_urls": {
//             "spotify": "https://open.spotify.com/artist/73A3bLnfnz5BoQjb4gNCga"
//         },
//         "href": "https://api.spotify.com/v1/artists/73A3bLnfnz5BoQjb4gNCga",
//         "id": "73A3bLnfnz5BoQjb4gNCga",
//         "name": "Bicep",
//         "type": "artist",
//         "uri": "spotify:artist:73A3bLnfnz5BoQjb4gNCga"
//     }],
//     "available_markets": ["AD", "AE", "AG", "AL", "AM", "AO", "AR", "AT", "AU", "AZ", "BA", "BB", "BD", "BE", "BF", "BG", "BH", "BI", "BJ", "BN", "BO", "BR", "BS", "BT", "BW", "BY", "BZ", "CA", "CH", "CI", "CL", "CM", "CO", "CR", "CV", "CW", "CY", "CZ", "DE", "DJ", "DK", "DM", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FJ", "FM", "FR", "GA", "GB", "GD", "GE", "GH", "GM", "GN", "GQ", "GR", "GT", "GW", "GY", "HK", "HN", "HR", "HT", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JM", "JO", "JP", "KE", "KG", "KH", "KI", "KM", "KN", "KR", "KW", "KZ", "LA", "LB", "LC", "LI", "LK", "LR", "LS", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MG", "MH", "MK", "ML", "MN", "MO", "MR", "MT", "MU", "MV", "MW", "MX", "MY", "MZ", "NA", "NE", "NG", "NI", "NL", "NO", "NP", "NR", "NZ", "OM", "PA", "PE", "PG", "PH", "PK", "PL", "PS", "PT", "PW", "PY", "QA", "RO", "RS", "RU", "RW", "SA", "SB", "SC", "SE", "SG", "SI", "SK", "SL", "SM", "SN", "SR", "ST", "SV", "SZ", "TD", "TG", "TH", "TL", "TN", "TO", "TR", "TT", "TV", "TW", "TZ", "UA", "UG", "US", "UY", "UZ", "VC", "VN", "VU", "WS", "XK", "ZA", "ZM", "ZW"],
//     "copyrights": [{
//         "text": "2021 Ninja Tune",
//         "type": "C"
//     }, {
//         "text": "2021 Ninja Tune",
//         "type": "P"
//     }],
//     "external_ids": {
//         "upc": "5054429149173"
//     },
//     "external_urls": {
//         "spotify": "https://open.spotify.com/album/1bx7sNUpVB9fQ7QhcVZsUV"
//     },
//     "genres": [],
//     "href": "https://api.spotify.com/v1/albums/1bx7sNUpVB9fQ7QhcVZsUV",
//     "id": "1bx7sNUpVB9fQ7QhcVZsUV",
//     "images": [{
//         "height": 640,
//         "url": "https://i.scdn.co/image/ab67616d0000b273d8a6f8e3fae832623234e4d0",
//         "width": 640
//     }, {
//         "height": 300,
//         "url": "https://i.scdn.co/image/ab67616d00001e02d8a6f8e3fae832623234e4d0",
//         "width": 300
//     }, {
//         "height": 64,
//         "url": "https://i.scdn.co/image/ab67616d00004851d8a6f8e3fae832623234e4d0",
//         "width": 64
//     }],
//     "label": "Ninja Tune",
//     "name": "Isles (Deluxe)",
//     "popularity": 59,
//     "release_date": "2021-04-20",
//     "release_date_precision": "day",
//     "total_tracks": 13,
//     "tracks": {
//         "href": "https://api.spotify.com/v1/albums/1bx7sNUpVB9fQ7QhcVZsUV/tracks?offset=0&limit=50",
//         "items": [{
//             "artists": [{
//                 "external_urls": {
//                     "spotify": "https://open.spotify.com/artist/73A3bLnfnz5BoQjb4gNCga"
//                 },
//                 "href": "https://api.spotify.com/v1/artists/73A3bLnfnz5BoQjb4gNCga",
//                 "id": "73A3bLnfnz5BoQjb4gNCga",
//                 "name": "Bicep",
//                 "type": "artist",
//                 "uri": "spotify:artist:73A3bLnfnz5BoQjb4gNCga"
//             }],
//             "available_markets": ["AD", "AE", "AG", "AL", "AM", "AO", "AR", "AT", "AU", "AZ", "BA", "BB", "BD", "BE", "BF", "BG", "BH", "BI", "BJ", "BN", "BO", "BR", "BS", "BT", "BW", "BY", "BZ", "CA", "CH", "CI", "CL", "CM", "CO", "CR", "CV", "CW", "CY", "CZ", "DE", "DJ", "DK", "DM", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FJ", "FM", "FR", "GA", "GB", "GD", "GE", "GH", "GM", "GN", "GQ", "GR", "GT", "GW", "GY", "HK", "HN", "HR", "HT", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JM", "JO", "JP", "KE", "KG", "KH", "KI", "KM", "KN", "KR", "KW", "KZ", "LA", "LB", "LC", "LI", "LK", "LR", "LS", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MG", "MH", "MK", "ML", "MN", "MO", "MR", "MT", "MU", "MV", "MW", "MX", "MY", "MZ", "NA", "NE", "NG", "NI", "NL", "NO", "NP", "NR", "NZ", "OM", "PA", "PE", "PG", "PH", "PK", "PL", "PS", "PT", "PW", "PY", "QA", "RO", "RS", "RU", "RW", "SA", "SB", "SC", "SE", "SG", "SI", "SK", "SL", "SM", "SN", "SR", "ST", "SV", "SZ", "TD", "TG", "TH", "TL", "TN", "TO", "TR", "TT", "TV", "TW", "TZ", "UA", "UG", "US", "UY", "UZ", "VC", "VN", "VU", "WS", "XK", "ZA", "ZM", "ZW"],
//             "disc_number": 1,
//             "duration_ms": 348306,
//             "explicit": false,
//             "external_urls": {
//                 "spotify": "https://open.spotify.com/track/2X5zWAt3augONkfuyVMaSG"
//             },
//             "href": "https://api.spotify.com/v1/tracks/2X5zWAt3augONkfuyVMaSG",
//             "id": "2X5zWAt3augONkfuyVMaSG",
//             "is_local": false,
//             "name": "Atlas",
//             "preview_url": "https://p.scdn.co/mp3-preview/6d97a35cb7c2b9d4ab2c65d67e0085c0d23606f3?cid=0712ca974fb2418b9a2519232041b6d2",
//             "track_number": 1,
//             "type": "track",
//             "uri": "spotify:track:2X5zWAt3augONkfuyVMaSG"
//         }, {
//             "artists": [{
//                 "external_urls": {
//                     "spotify": "https://open.spotify.com/artist/73A3bLnfnz5BoQjb4gNCga"
//                 },
//                 "href": "https://api.spotify.com/v1/artists/73A3bLnfnz5BoQjb4gNCga",
//                 "id": "73A3bLnfnz5BoQjb4gNCga",
//                 "name": "Bicep",
//                 "type": "artist",
//                 "uri": "spotify:artist:73A3bLnfnz5BoQjb4gNCga"
//             }],
//             "available_markets": ["AD", "AE", "AG", "AL", "AM", "AO", "AR", "AT", "AU", "AZ", "BA", "BB", "BD", "BE", "BF", "BG", "BH", "BI", "BJ", "BN", "BO", "BR", "BS", "BT", "BW", "BY", "BZ", "CA", "CH", "CI", "CL", "CM", "CO", "CR", "CV", "CW", "CY", "CZ", "DE", "DJ", "DK", "DM", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FJ", "FM", "FR", "GA", "GB", "GD", "GE", "GH", "GM", "GN", "GQ", "GR", "GT", "GW", "GY", "HK", "HN", "HR", "HT", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JM", "JO", "JP", "KE", "KG", "KH", "KI", "KM", "KN", "KR", "KW", "KZ", "LA", "LB", "LC", "LI", "LK", "LR", "LS", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MG", "MH", "MK", "ML", "MN", "MO", "MR", "MT", "MU", "MV", "MW", "MX", "MY", "MZ", "NA", "NE", "NG", "NI", "NL", "NO", "NP", "NR", "NZ", "OM", "PA", "PE", "PG", "PH", "PK", "PL", "PS", "PT", "PW", "PY", "QA", "RO", "RS", "RU", "RW", "SA", "SB", "SC", "SE", "SG", "SI", "SK", "SL", "SM", "SN", "SR", "ST", "SV", "SZ", "TD", "TG", "TH", "TL", "TN", "TO", "TR", "TT", "TV", "TW", "TZ", "UA", "UG", "US", "UY", "UZ", "VC", "VN", "VU", "WS", "XK", "ZA", "ZM", "ZW"],
//             "disc_number": 1,
//             "duration_ms": 262946,
//             "explicit": false,
//             "external_urls": {
//                 "spotify": "https://open.spotify.com/track/4WKvjnKa6PyYDA5i6o0bys"
//             },
//             "href": "https://api.spotify.com/v1/tracks/4WKvjnKa6PyYDA5i6o0bys",
//             "id": "4WKvjnKa6PyYDA5i6o0bys",
//             "is_local": false,
//             "name": "Cazenove",
//             "preview_url": "https://p.scdn.co/mp3-preview/6e32fcc310be791caa172e0ae78e5de59a4a0092?cid=0712ca974fb2418b9a2519232041b6d2",
//             "track_number": 2,
//             "type": "track",
//             "uri": "spotify:track:4WKvjnKa6PyYDA5i6o0bys"
//         }, {
//             "artists": [{
//                 "external_urls": {
//                     "spotify": "https://open.spotify.com/artist/73A3bLnfnz5BoQjb4gNCga"
//                 },
//                 "href": "https://api.spotify.com/v1/artists/73A3bLnfnz5BoQjb4gNCga",
//                 "id": "73A3bLnfnz5BoQjb4gNCga",
//                 "name": "Bicep",
//                 "type": "artist",
//                 "uri": "spotify:artist:73A3bLnfnz5BoQjb4gNCga"
//             }],
//             "available_markets": ["AD", "AE", "AG", "AL", "AM", "AO", "AR", "AT", "AU", "AZ", "BA", "BB", "BD", "BE", "BF", "BG", "BH", "BI", "BJ", "BN", "BO", "BR", "BS", "BT", "BW", "BY", "BZ", "CA", "CH", "CI", "CL", "CM", "CO", "CR", "CV", "CW", "CY", "CZ", "DE", "DJ", "DK", "DM", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FJ", "FM", "FR", "GA", "GB", "GD", "GE", "GH", "GM", "GN", "GQ", "GR", "GT", "GW", "GY", "HK", "HN", "HR", "HT", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JM", "JO", "JP", "KE", "KG", "KH", "KI", "KM", "KN", "KR", "KW", "KZ", "LA", "LB", "LC", "LI", "LK", "LR", "LS", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MG", "MH", "MK", "ML", "MN", "MO", "MR", "MT", "MU", "MV", "MW", "MX", "MY", "MZ", "NA", "NE", "NG", "NI", "NL", "NO", "NP", "NR", "NZ", "OM", "PA", "PE", "PG", "PH", "PK", "PL", "PS", "PT", "PW", "PY", "QA", "RO", "RS", "RU", "RW", "SA", "SB", "SC", "SE", "SG", "SI", "SK", "SL", "SM", "SN", "SR", "ST", "SV", "SZ", "TD", "TG", "TH", "TL", "TN", "TO", "TR", "TT", "TV", "TW", "TZ", "UA", "UG", "US", "UY", "UZ", "VC", "VN", "VU", "WS", "XK", "ZA", "ZM", "ZW"],
//             "disc_number": 1,
//             "duration_ms": 246506,
//             "explicit": false,
//             "external_urls": {
//                 "spotify": "https://open.spotify.com/track/7FlrzthrjIL573Pgi7LZKL"
//             },
//             "href": "https://api.spotify.com/v1/tracks/7FlrzthrjIL573Pgi7LZKL",
//             "id": "7FlrzthrjIL573Pgi7LZKL",
//             "is_local": false,
//             "name": "Apricots",
//             "preview_url": "https://p.scdn.co/mp3-preview/24e7f543854d2127a1eb99a5536d26e9a91fe48a?cid=0712ca974fb2418b9a2519232041b6d2",
//             "track_number": 3,
//             "type": "track",
//             "uri": "spotify:track:7FlrzthrjIL573Pgi7LZKL"
//         }, {
//             "artists": [{
//                 "external_urls": {
//                     "spotify": "https://open.spotify.com/artist/73A3bLnfnz5BoQjb4gNCga"
//                 },
//                 "href": "https://api.spotify.com/v1/artists/73A3bLnfnz5BoQjb4gNCga",
//                 "id": "73A3bLnfnz5BoQjb4gNCga",
//                 "name": "Bicep",
//                 "type": "artist",
//                 "uri": "spotify:artist:73A3bLnfnz5BoQjb4gNCga"
//             }, {
//                 "external_urls": {
//                     "spotify": "https://open.spotify.com/artist/3u65Tx20y4WqxO7W7khEhj"
//                 },
//                 "href": "https://api.spotify.com/v1/artists/3u65Tx20y4WqxO7W7khEhj",
//                 "id": "3u65Tx20y4WqxO7W7khEhj",
//                 "name": "Clara La San",
//                 "type": "artist",
//                 "uri": "spotify:artist:3u65Tx20y4WqxO7W7khEhj"
//             }],
//             "available_markets": ["AD", "AE", "AG", "AL", "AM", "AO", "AR", "AT", "AU", "AZ", "BA", "BB", "BD", "BE", "BF", "BG", "BH", "BI", "BJ", "BN", "BO", "BR", "BS", "BT", "BW", "BY", "BZ", "CA", "CH", "CI", "CL", "CM", "CO", "CR", "CV", "CW", "CY", "CZ", "DE", "DJ", "DK", "DM", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FJ", "FM", "FR", "GA", "GB", "GD", "GE", "GH", "GM", "GN", "GQ", "GR", "GT", "GW", "GY", "HK", "HN", "HR", "HT", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JM", "JO", "JP", "KE", "KG", "KH", "KI", "KM", "KN", "KR", "KW", "KZ", "LA", "LB", "LC", "LI", "LK", "LR", "LS", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MG", "MH", "MK", "ML", "MN", "MO", "MR", "MT", "MU", "MV", "MW", "MX", "MY", "MZ", "NA", "NE", "NG", "NI", "NL", "NO", "NP", "NR", "NZ", "OM", "PA", "PE", "PG", "PH", "PK", "PL", "PS", "PT", "PW", "PY", "QA", "RO", "RS", "RU", "RW", "SA", "SB", "SC", "SE", "SG", "SI", "SK", "SL", "SM", "SN", "SR", "ST", "SV", "SZ", "TD", "TG", "TH", "TL", "TN", "TO", "TR", "TT", "TV", "TW", "TZ", "UA", "UG", "US", "UY", "UZ", "VC", "VN", "VU", "WS", "XK", "ZA", "ZM", "ZW"],
//             "disc_number": 1,
//             "duration_ms": 297253,
//             "explicit": false,
//             "external_urls": {
//                 "spotify": "https://open.spotify.com/track/1GFtsKu4t2gPXfRxbZrhxL"
//             },
//             "href": "https://api.spotify.com/v1/tracks/1GFtsKu4t2gPXfRxbZrhxL",
//             "id": "1GFtsKu4t2gPXfRxbZrhxL",
//             "is_local": false,
//             "name": "Saku",
//             "preview_url": "https://p.scdn.co/mp3-preview/7f97475e3f307a484b9b36b0f0250c6042302f5f?cid=0712ca974fb2418b9a2519232041b6d2",
//             "track_number": 4,
//             "type": "track",
//             "uri": "spotify:track:1GFtsKu4t2gPXfRxbZrhxL"
//         }, {
//             "artists": [{
//                 "external_urls": {
//                     "spotify": "https://open.spotify.com/artist/73A3bLnfnz5BoQjb4gNCga"
//                 },
//                 "href": "https://api.spotify.com/v1/artists/73A3bLnfnz5BoQjb4gNCga",
//                 "id": "73A3bLnfnz5BoQjb4gNCga",
//                 "name": "Bicep",
//                 "type": "artist",
//                 "uri": "spotify:artist:73A3bLnfnz5BoQjb4gNCga"
//             }],
//             "available_markets": ["AD", "AE", "AG", "AL", "AM", "AO", "AR", "AT", "AU", "AZ", "BA", "BB", "BD", "BE", "BF", "BG", "BH", "BI", "BJ", "BN", "BO", "BR", "BS", "BT", "BW", "BY", "BZ", "CA", "CH", "CI", "CL", "CM", "CO", "CR", "CV", "CW", "CY", "CZ", "DE", "DJ", "DK", "DM", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FJ", "FM", "FR", "GA", "GB", "GD", "GE", "GH", "GM", "GN", "GQ", "GR", "GT", "GW", "GY", "HK", "HN", "HR", "HT", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JM", "JO", "JP", "KE", "KG", "KH", "KI", "KM", "KN", "KR", "KW", "KZ", "LA", "LB", "LC", "LI", "LK", "LR", "LS", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MG", "MH", "MK", "ML", "MN", "MO", "MR", "MT", "MU", "MV", "MW", "MX", "MY", "MZ", "NA", "NE", "NG", "NI", "NL", "NO", "NP", "NR", "NZ", "OM", "PA", "PE", "PG", "PH", "PK", "PL", "PS", "PT", "PW", "PY", "QA", "RO", "RS", "RU", "RW", "SA", "SB", "SC", "SE", "SG", "SI", "SK", "SL", "SM", "SN", "SR", "ST", "SV", "SZ", "TD", "TG", "TH", "TL", "TN", "TO", "TR", "TT", "TV", "TW", "TZ", "UA", "UG", "US", "UY", "UZ", "VC", "VN", "VU", "WS", "XK", "ZA", "ZM", "ZW"],
//             "disc_number": 1,
//             "duration_ms": 200240,
//             "explicit": false,
//             "external_urls": {
//                 "spotify": "https://open.spotify.com/track/29QqAWlcqwXdc1GogY3ce0"
//             },
//             "href": "https://api.spotify.com/v1/tracks/29QqAWlcqwXdc1GogY3ce0",
//             "id": "29QqAWlcqwXdc1GogY3ce0",
//             "is_local": false,
//             "name": "Lido",
//             "preview_url": "https://p.scdn.co/mp3-preview/91cc60c35f8aa32b09e619aeadee301243646aae?cid=0712ca974fb2418b9a2519232041b6d2",
//             "track_number": 5,
//             "type": "track",
//             "uri": "spotify:track:29QqAWlcqwXdc1GogY3ce0"
//         }, {
//             "artists": [{
//                 "external_urls": {
//                     "spotify": "https://open.spotify.com/artist/73A3bLnfnz5BoQjb4gNCga"
//                 },
//                 "href": "https://api.spotify.com/v1/artists/73A3bLnfnz5BoQjb4gNCga",
//                 "id": "73A3bLnfnz5BoQjb4gNCga",
//                 "name": "Bicep",
//                 "type": "artist",
//                 "uri": "spotify:artist:73A3bLnfnz5BoQjb4gNCga"
//             }, {
//                 "external_urls": {
//                     "spotify": "https://open.spotify.com/artist/3u65Tx20y4WqxO7W7khEhj"
//                 },
//                 "href": "https://api.spotify.com/v1/artists/3u65Tx20y4WqxO7W7khEhj",
//                 "id": "3u65Tx20y4WqxO7W7khEhj",
//                 "name": "Clara La San",
//                 "type": "artist",
//                 "uri": "spotify:artist:3u65Tx20y4WqxO7W7khEhj"
//             }],
//             "available_markets": ["AD", "AE", "AG", "AL", "AM", "AO", "AR", "AT", "AU", "AZ", "BA", "BB", "BD", "BE", "BF", "BG", "BH", "BI", "BJ", "BN", "BO", "BR", "BS", "BT", "BW", "BY", "BZ", "CA", "CH", "CI", "CL", "CM", "CO", "CR", "CV", "CW", "CY", "CZ", "DE", "DJ", "DK", "DM", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FJ", "FM", "FR", "GA", "GB", "GD", "GE", "GH", "GM", "GN", "GQ", "GR", "GT", "GW", "GY", "HK", "HN", "HR", "HT", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JM", "JO", "JP", "KE", "KG", "KH", "KI", "KM", "KN", "KR", "KW", "KZ", "LA", "LB", "LC", "LI", "LK", "LR", "LS", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MG", "MH", "MK", "ML", "MN", "MO", "MR", "MT", "MU", "MV", "MW", "MX", "MY", "MZ", "NA", "NE", "NG", "NI", "NL", "NO", "NP", "NR", "NZ", "OM", "PA", "PE", "PG", "PH", "PK", "PL", "PS", "PT", "PW", "PY", "QA", "RO", "RS", "RU", "RW", "SA", "SB", "SC", "SE", "SG", "SI", "SK", "SL", "SM", "SN", "SR", "ST", "SV", "SZ", "TD", "TG", "TH", "TL", "TN", "TO", "TR", "TT", "TV", "TW", "TZ", "UA", "UG", "US", "UY", "UZ", "VC", "VN", "VU", "WS", "XK", "ZA", "ZM", "ZW"],
//             "disc_number": 1,
//             "duration_ms": 333160,
//             "explicit": false,
//             "external_urls": {
//                 "spotify": "https://open.spotify.com/track/5dCXWX7FmjPVMJbFAiSaMZ"
//             },
//             "href": "https://api.spotify.com/v1/tracks/5dCXWX7FmjPVMJbFAiSaMZ",
//             "id": "5dCXWX7FmjPVMJbFAiSaMZ",
//             "is_local": false,
//             "name": "X",
//             "preview_url": "https://p.scdn.co/mp3-preview/c896efa7fc0c17fd279a1e854d81a750230d800b?cid=0712ca974fb2418b9a2519232041b6d2",
//             "track_number": 6,
//             "type": "track",
//             "uri": "spotify:track:5dCXWX7FmjPVMJbFAiSaMZ"
//         }, {
//             "artists": [{
//                 "external_urls": {
//                     "spotify": "https://open.spotify.com/artist/73A3bLnfnz5BoQjb4gNCga"
//                 },
//                 "href": "https://api.spotify.com/v1/artists/73A3bLnfnz5BoQjb4gNCga",
//                 "id": "73A3bLnfnz5BoQjb4gNCga",
//                 "name": "Bicep",
//                 "type": "artist",
//                 "uri": "spotify:artist:73A3bLnfnz5BoQjb4gNCga"
//             }, {
//                 "external_urls": {
//                     "spotify": "https://open.spotify.com/artist/2YJXo1ERQAO7r4hQtu2vFc"
//                 },
//                 "href": "https://api.spotify.com/v1/artists/2YJXo1ERQAO7r4hQtu2vFc",
//                 "id": "2YJXo1ERQAO7r4hQtu2vFc",
//                 "name": "Julia Kent",
//                 "type": "artist",
//                 "uri": "spotify:artist:2YJXo1ERQAO7r4hQtu2vFc"
//             }],
//             "available_markets": ["AD", "AE", "AG", "AL", "AM", "AO", "AR", "AT", "AU", "AZ", "BA", "BB", "BD", "BE", "BF", "BG", "BH", "BI", "BJ", "BN", "BO", "BR", "BS", "BT", "BW", "BY", "BZ", "CA", "CH", "CI", "CL", "CM", "CO", "CR", "CV", "CW", "CY", "CZ", "DE", "DJ", "DK", "DM", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FJ", "FM", "FR", "GA", "GB", "GD", "GE", "GH", "GM", "GN", "GQ", "GR", "GT", "GW", "GY", "HK", "HN", "HR", "HT", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JM", "JO", "JP", "KE", "KG", "KH", "KI", "KM", "KN", "KR", "KW", "KZ", "LA", "LB", "LC", "LI", "LK", "LR", "LS", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MG", "MH", "MK", "ML", "MN", "MO", "MR", "MT", "MU", "MV", "MW", "MX", "MY", "MZ", "NA", "NE", "NG", "NI", "NL", "NO", "NP", "NR", "NZ", "OM", "PA", "PE", "PG", "PH", "PK", "PL", "PS", "PT", "PW", "PY", "QA", "RO", "RS", "RU", "RW", "SA", "SB", "SC", "SE", "SG", "SI", "SK", "SL", "SM", "SN", "SR", "ST", "SV", "SZ", "TD", "TG", "TH", "TL", "TN", "TO", "TR", "TT", "TV", "TW", "TZ", "UA", "UG", "US", "UY", "UZ", "VC", "VN", "VU", "WS", "XK", "ZA", "ZM", "ZW"],
//             "disc_number": 1,
//             "duration_ms": 319280,
//             "explicit": false,
//             "external_urls": {
//                 "spotify": "https://open.spotify.com/track/26MyQtNKZyPxn1yeSuxRt6"
//             },
//             "href": "https://api.spotify.com/v1/tracks/26MyQtNKZyPxn1yeSuxRt6",
//             "id": "26MyQtNKZyPxn1yeSuxRt6",
//             "is_local": false,
//             "name": "Rever",
//             "preview_url": "https://p.scdn.co/mp3-preview/423142889f843644e5b9afa59e665695a993f5ad?cid=0712ca974fb2418b9a2519232041b6d2",
//             "track_number": 7,
//             "type": "track",
//             "uri": "spotify:track:26MyQtNKZyPxn1yeSuxRt6"
//         }, {
//             "artists": [{
//                 "external_urls": {
//                     "spotify": "https://open.spotify.com/artist/73A3bLnfnz5BoQjb4gNCga"
//                 },
//                 "href": "https://api.spotify.com/v1/artists/73A3bLnfnz5BoQjb4gNCga",
//                 "id": "73A3bLnfnz5BoQjb4gNCga",
//                 "name": "Bicep",
//                 "type": "artist",
//                 "uri": "spotify:artist:73A3bLnfnz5BoQjb4gNCga"
//             }],
//             "available_markets": ["AD", "AE", "AG", "AL", "AM", "AO", "AR", "AT", "AU", "AZ", "BA", "BB", "BD", "BE", "BF", "BG", "BH", "BI", "BJ", "BN", "BO", "BR", "BS", "BT", "BW", "BY", "BZ", "CA", "CH", "CI", "CL", "CM", "CO", "CR", "CV", "CW", "CY", "CZ", "DE", "DJ", "DK", "DM", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FJ", "FM", "FR", "GA", "GB", "GD", "GE", "GH", "GM", "GN", "GQ", "GR", "GT", "GW", "GY", "HK", "HN", "HR", "HT", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JM", "JO", "JP", "KE", "KG", "KH", "KI", "KM", "KN", "KR", "KW", "KZ", "LA", "LB", "LC", "LI", "LK", "LR", "LS", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MG", "MH", "MK", "ML", "MN", "MO", "MR", "MT", "MU", "MV", "MW", "MX", "MY", "MZ", "NA", "NE", "NG", "NI", "NL", "NO", "NP", "NR", "NZ", "OM", "PA", "PE", "PG", "PH", "PK", "PL", "PS", "PT", "PW", "PY", "QA", "RO", "RS", "RU", "RW", "SA", "SB", "SC", "SE", "SG", "SI", "SK", "SL", "SM", "SN", "SR", "ST", "SV", "SZ", "TD", "TG", "TH", "TL", "TN", "TO", "TR", "TT", "TV", "TW", "TZ", "UA", "UG", "US", "UY", "UZ", "VC", "VN", "VU", "WS", "XK", "ZA", "ZM", "ZW"],
//             "disc_number": 1,
//             "duration_ms": 275800,
//             "explicit": false,
//             "external_urls": {
//                 "spotify": "https://open.spotify.com/track/2luzk42QJ9VHTH5T6iuhIZ"
//             },
//             "href": "https://api.spotify.com/v1/tracks/2luzk42QJ9VHTH5T6iuhIZ",
//             "id": "2luzk42QJ9VHTH5T6iuhIZ",
//             "is_local": false,
//             "name": "Sundial",
//             "preview_url": "https://p.scdn.co/mp3-preview/0eb117ba1a9ae25d7ec1ca8f1cdf4c5073b23385?cid=0712ca974fb2418b9a2519232041b6d2",
//             "track_number": 8,
//             "type": "track",
//             "uri": "spotify:track:2luzk42QJ9VHTH5T6iuhIZ"
//         }, {
//             "artists": [{
//                 "external_urls": {
//                     "spotify": "https://open.spotify.com/artist/73A3bLnfnz5BoQjb4gNCga"
//                 },
//                 "href": "https://api.spotify.com/v1/artists/73A3bLnfnz5BoQjb4gNCga",
//                 "id": "73A3bLnfnz5BoQjb4gNCga",
//                 "name": "Bicep",
//                 "type": "artist",
//                 "uri": "spotify:artist:73A3bLnfnz5BoQjb4gNCga"
//             }],
//             "available_markets": ["AD", "AE", "AG", "AL", "AM", "AO", "AR", "AT", "AU", "AZ", "BA", "BB", "BD", "BE", "BF", "BG", "BH", "BI", "BJ", "BN", "BO", "BR", "BS", "BT", "BW", "BY", "BZ", "CA", "CH", "CI", "CL", "CM", "CO", "CR", "CV", "CW", "CY", "CZ", "DE", "DJ", "DK", "DM", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FJ", "FM", "FR", "GA", "GB", "GD", "GE", "GH", "GM", "GN", "GQ", "GR", "GT", "GW", "GY", "HK", "HN", "HR", "HT", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JM", "JO", "JP", "KE", "KG", "KH", "KI", "KM", "KN", "KR", "KW", "KZ", "LA", "LB", "LC", "LI", "LK", "LR", "LS", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MG", "MH", "MK", "ML", "MN", "MO", "MR", "MT", "MU", "MV", "MW", "MX", "MY", "MZ", "NA", "NE", "NG", "NI", "NL", "NO", "NP", "NR", "NZ", "OM", "PA", "PE", "PG", "PH", "PK", "PL", "PS", "PT", "PW", "PY", "QA", "RO", "RS", "RU", "RW", "SA", "SB", "SC", "SE", "SG", "SI", "SK", "SL", "SM", "SN", "SR", "ST", "SV", "SZ", "TD", "TG", "TH", "TL", "TN", "TO", "TR", "TT", "TV", "TW", "TZ", "UA", "UG", "US", "UY", "UZ", "VC", "VN", "VU", "WS", "XK", "ZA", "ZM", "ZW"],
//             "disc_number": 1,
//             "duration_ms": 323333,
//             "explicit": false,
//             "external_urls": {
//                 "spotify": "https://open.spotify.com/track/28aO1XduWCjtkpuTIzGwFH"
//             },
//             "href": "https://api.spotify.com/v1/tracks/28aO1XduWCjtkpuTIzGwFH",
//             "id": "28aO1XduWCjtkpuTIzGwFH",
//             "is_local": false,
//             "name": "Fir",
//             "preview_url": "https://p.scdn.co/mp3-preview/a74dc9a712c8afebd2e5425009169cfc289c1f3a?cid=0712ca974fb2418b9a2519232041b6d2",
//             "track_number": 9,
//             "type": "track",
//             "uri": "spotify:track:28aO1XduWCjtkpuTIzGwFH"
//         }, {
//             "artists": [{
//                 "external_urls": {
//                     "spotify": "https://open.spotify.com/artist/73A3bLnfnz5BoQjb4gNCga"
//                 },
//                 "href": "https://api.spotify.com/v1/artists/73A3bLnfnz5BoQjb4gNCga",
//                 "id": "73A3bLnfnz5BoQjb4gNCga",
//                 "name": "Bicep",
//                 "type": "artist",
//                 "uri": "spotify:artist:73A3bLnfnz5BoQjb4gNCga"
//             }, {
//                 "external_urls": {
//                     "spotify": "https://open.spotify.com/artist/0WOOrXTvgnjErVjsXSOOxn"
//                 },
//                 "href": "https://api.spotify.com/v1/artists/0WOOrXTvgnjErVjsXSOOxn",
//                 "id": "0WOOrXTvgnjErVjsXSOOxn",
//                 "name": "machìna",
//                 "type": "artist",
//                 "uri": "spotify:artist:0WOOrXTvgnjErVjsXSOOxn"
//             }],
//             "available_markets": ["AD", "AE", "AG", "AL", "AM", "AO", "AR", "AT", "AU", "AZ", "BA", "BB", "BD", "BE", "BF", "BG", "BH", "BI", "BJ", "BN", "BO", "BR", "BS", "BT", "BW", "BY", "BZ", "CA", "CH", "CI", "CL", "CM", "CO", "CR", "CV", "CW", "CY", "CZ", "DE", "DJ", "DK", "DM", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FJ", "FM", "FR", "GA", "GB", "GD", "GE", "GH", "GM", "GN", "GQ", "GR", "GT", "GW", "GY", "HK", "HN", "HR", "HT", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JM", "JO", "JP", "KE", "KG", "KH", "KI", "KM", "KN", "KR", "KW", "KZ", "LA", "LB", "LC", "LI", "LK", "LR", "LS", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MG", "MH", "MK", "ML", "MN", "MO", "MR", "MT", "MU", "MV", "MW", "MX", "MY", "MZ", "NA", "NE", "NG", "NI", "NL", "NO", "NP", "NR", "NZ", "OM", "PA", "PE", "PG", "PH", "PK", "PL", "PS", "PT", "PW", "PY", "QA", "RO", "RS", "RU", "RW", "SA", "SB", "SC", "SE", "SG", "SI", "SK", "SL", "SM", "SN", "SR", "ST", "SV", "SZ", "TD", "TG", "TH", "TL", "TN", "TO", "TR", "TT", "TV", "TW", "TZ", "UA", "UG", "US", "UY", "UZ", "VC", "VN", "VU", "WS", "XK", "ZA", "ZM", "ZW"],
//             "disc_number": 1,
//             "duration_ms": 359546,
//             "explicit": false,
//             "external_urls": {
//                 "spotify": "https://open.spotify.com/track/17t61dGGKlH0Ma65yGbRDf"
//             },
//             "href": "https://api.spotify.com/v1/tracks/17t61dGGKlH0Ma65yGbRDf",
//             "id": "17t61dGGKlH0Ma65yGbRDf",
//             "is_local": false,
//             "name": "Hawk",
//             "preview_url": "https://p.scdn.co/mp3-preview/1d48c2416c4d367ed578ff30f62014ec340fbc05?cid=0712ca974fb2418b9a2519232041b6d2",
//             "track_number": 10,
//             "type": "track",
//             "uri": "spotify:track:17t61dGGKlH0Ma65yGbRDf"
//         }, {
//             "artists": [{
//                 "external_urls": {
//                     "spotify": "https://open.spotify.com/artist/73A3bLnfnz5BoQjb4gNCga"
//                 },
//                 "href": "https://api.spotify.com/v1/artists/73A3bLnfnz5BoQjb4gNCga",
//                 "id": "73A3bLnfnz5BoQjb4gNCga",
//                 "name": "Bicep",
//                 "type": "artist",
//                 "uri": "spotify:artist:73A3bLnfnz5BoQjb4gNCga"
//             }, {
//                 "external_urls": {
//                     "spotify": "https://open.spotify.com/artist/3u65Tx20y4WqxO7W7khEhj"
//                 },
//                 "href": "https://api.spotify.com/v1/artists/3u65Tx20y4WqxO7W7khEhj",
//                 "id": "3u65Tx20y4WqxO7W7khEhj",
//                 "name": "Clara La San",
//                 "type": "artist",
//                 "uri": "spotify:artist:3u65Tx20y4WqxO7W7khEhj"
//             }],
//             "available_markets": ["AD", "AE", "AG", "AL", "AM", "AO", "AR", "AT", "AU", "AZ", "BA", "BB", "BD", "BE", "BF", "BG", "BH", "BI", "BJ", "BN", "BO", "BR", "BS", "BT", "BW", "BY", "BZ", "CA", "CH", "CI", "CL", "CM", "CO", "CR", "CV", "CW", "CY", "CZ", "DE", "DJ", "DK", "DM", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FJ", "FM", "FR", "GA", "GB", "GD", "GE", "GH", "GM", "GN", "GQ", "GR", "GT", "GW", "GY", "HK", "HN", "HR", "HT", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JM", "JO", "JP", "KE", "KG", "KH", "KI", "KM", "KN", "KR", "KW", "KZ", "LA", "LB", "LC", "LI", "LK", "LR", "LS", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MG", "MH", "MK", "ML", "MN", "MO", "MR", "MT", "MU", "MV", "MW", "MX", "MY", "MZ", "NA", "NE", "NG", "NI", "NL", "NO", "NP", "NR", "NZ", "OM", "PA", "PE", "PG", "PH", "PK", "PL", "PS", "PT", "PW", "PY", "QA", "RO", "RS", "RU", "RW", "SA", "SB", "SC", "SE", "SG", "SI", "SK", "SL", "SM", "SN", "SR", "ST", "SV", "SZ", "TD", "TG", "TH", "TL", "TN", "TO", "TR", "TT", "TV", "TW", "TZ", "UA", "UG", "US", "UY", "UZ", "VC", "VN", "VU", "WS", "XK", "ZA", "ZM", "ZW"],
//             "disc_number": 2,
//             "duration_ms": 242928,
//             "explicit": false,
//             "external_urls": {
//                 "spotify": "https://open.spotify.com/track/04Z4gQvoaggI4cQ6jDLbOe"
//             },
//             "href": "https://api.spotify.com/v1/tracks/04Z4gQvoaggI4cQ6jDLbOe",
//             "id": "04Z4gQvoaggI4cQ6jDLbOe",
//             "is_local": false,
//             "name": "Siena",
//             "preview_url": "https://p.scdn.co/mp3-preview/f6b1a4ececfdfda22713d986e4d9bff67d209194?cid=0712ca974fb2418b9a2519232041b6d2",
//             "track_number": 1,
//             "type": "track",
//             "uri": "spotify:track:04Z4gQvoaggI4cQ6jDLbOe"
//         }, {
//             "artists": [{
//                 "external_urls": {
//                     "spotify": "https://open.spotify.com/artist/73A3bLnfnz5BoQjb4gNCga"
//                 },
//                 "href": "https://api.spotify.com/v1/artists/73A3bLnfnz5BoQjb4gNCga",
//                 "id": "73A3bLnfnz5BoQjb4gNCga",
//                 "name": "Bicep",
//                 "type": "artist",
//                 "uri": "spotify:artist:73A3bLnfnz5BoQjb4gNCga"
//             }],
//             "available_markets": ["AD", "AE", "AG", "AL", "AM", "AO", "AR", "AT", "AU", "AZ", "BA", "BB", "BD", "BE", "BF", "BG", "BH", "BI", "BJ", "BN", "BO", "BR", "BS", "BT", "BW", "BY", "BZ", "CA", "CH", "CI", "CL", "CM", "CO", "CR", "CV", "CW", "CY", "CZ", "DE", "DJ", "DK", "DM", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FJ", "FM", "FR", "GA", "GB", "GD", "GE", "GH", "GM", "GN", "GQ", "GR", "GT", "GW", "GY", "HK", "HN", "HR", "HT", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JM", "JO", "JP", "KE", "KG", "KH", "KI", "KM", "KN", "KR", "KW", "KZ", "LA", "LB", "LC", "LI", "LK", "LR", "LS", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MG", "MH", "MK", "ML", "MN", "MO", "MR", "MT", "MU", "MV", "MW", "MX", "MY", "MZ", "NA", "NE", "NG", "NI", "NL", "NO", "NP", "NR", "NZ", "OM", "PA", "PE", "PG", "PH", "PK", "PL", "PS", "PT", "PW", "PY", "QA", "RO", "RS", "RU", "RW", "SA", "SB", "SC", "SE", "SG", "SI", "SK", "SL", "SM", "SN", "SR", "ST", "SV", "SZ", "TD", "TG", "TH", "TL", "TN", "TO", "TR", "TT", "TV", "TW", "TZ", "UA", "UG", "US", "UY", "UZ", "VC", "VN", "VU", "WS", "XK", "ZA", "ZM", "ZW"],
//             "disc_number": 2,
//             "duration_ms": 229989,
//             "explicit": false,
//             "external_urls": {
//                 "spotify": "https://open.spotify.com/track/2sLPNpaKUwfnxZIr2MtQ8L"
//             },
//             "href": "https://api.spotify.com/v1/tracks/2sLPNpaKUwfnxZIr2MtQ8L",
//             "id": "2sLPNpaKUwfnxZIr2MtQ8L",
//             "is_local": false,
//             "name": "Meli (I)",
//             "preview_url": "https://p.scdn.co/mp3-preview/047b8113334a9b38471147c6831e40ff93f6aca5?cid=0712ca974fb2418b9a2519232041b6d2",
//             "track_number": 2,
//             "type": "track",
//             "uri": "spotify:track:2sLPNpaKUwfnxZIr2MtQ8L"
//         }, {
//             "artists": [{
//                 "external_urls": {
//                     "spotify": "https://open.spotify.com/artist/73A3bLnfnz5BoQjb4gNCga"
//                 },
//                 "href": "https://api.spotify.com/v1/artists/73A3bLnfnz5BoQjb4gNCga",
//                 "id": "73A3bLnfnz5BoQjb4gNCga",
//                 "name": "Bicep",
//                 "type": "artist",
//                 "uri": "spotify:artist:73A3bLnfnz5BoQjb4gNCga"
//             }],
//             "available_markets": ["AD", "AE", "AG", "AL", "AM", "AO", "AR", "AT", "AU", "AZ", "BA", "BB", "BD", "BE", "BF", "BG", "BH", "BI", "BJ", "BN", "BO", "BR", "BS", "BT", "BW", "BY", "BZ", "CA", "CH", "CI", "CL", "CM", "CO", "CR", "CV", "CW", "CY", "CZ", "DE", "DJ", "DK", "DM", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FJ", "FM", "FR", "GA", "GB", "GD", "GE", "GH", "GM", "GN", "GQ", "GR", "GT", "GW", "GY", "HK", "HN", "HR", "HT", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JM", "JO", "JP", "KE", "KG", "KH", "KI", "KM", "KN", "KR", "KW", "KZ", "LA", "LB", "LC", "LI", "LK", "LR", "LS", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MG", "MH", "MK", "ML", "MN", "MO", "MR", "MT", "MU", "MV", "MW", "MX", "MY", "MZ", "NA", "NE", "NG", "NI", "NL", "NO", "NP", "NR", "NZ", "OM", "PA", "PE", "PG", "PH", "PK", "PL", "PS", "PT", "PW", "PY", "QA", "RO", "RS", "RU", "RW", "SA", "SB", "SC", "SE", "SG", "SI", "SK", "SL", "SM", "SN", "SR", "ST", "SV", "SZ", "TD", "TG", "TH", "TL", "TN", "TO", "TR", "TT", "TV", "TW", "TZ", "UA", "UG", "US", "UY", "UZ", "VC", "VN", "VU", "WS", "XK", "ZA", "ZM", "ZW"],
//             "disc_number": 2,
//             "duration_ms": 296927,
//             "explicit": false,
//             "external_urls": {
//                 "spotify": "https://open.spotify.com/track/3bGC6jB6jWGa5hzSZzhHzs"
//             },
//             "href": "https://api.spotify.com/v1/tracks/3bGC6jB6jWGa5hzSZzhHzs",
//             "id": "3bGC6jB6jWGa5hzSZzhHzs",
//             "is_local": false,
//             "name": "Light",
//             "preview_url": "https://p.scdn.co/mp3-preview/da3d71d35adb717980aab545b0baaf8e96eefd62?cid=0712ca974fb2418b9a2519232041b6d2",
//             "track_number": 3,
//             "type": "track",
//             "uri": "spotify:track:3bGC6jB6jWGa5hzSZzhHzs"
//         }],
//         "limit": 50,
//         "next": null,
//         "offset": 0,
//         "previous": null,
//         "total": 13
//     },
//     "type": "album",
//     "uri": "spotify:album:1bx7sNUpVB9fQ7QhcVZsUV"
// }
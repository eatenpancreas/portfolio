export interface AlbumRef {
    id: number;
    name: string;
    image?: string;
}

export interface ArtistRef {
    id: number;
    name: string;
    image?: string;
}

export interface ItemId {
    id: number;
    externalIds: {
        spotify?: string[];
        appleMusic?: string[];
        ean?: unknown | null;
        isrc?: unknown | null;
        upc?: string | null;
    };
}

export interface Item {
    position: number;
    streams: number;
    playedMs: number;
    indicator: unknown | null;
}

export type Track = ItemId & {
    name: string;
    duration: number;
    explicit: boolean;
    spotifyPopularity?: number;
    spotifyPreview?: string;
    appleMusicPreview?: string;
    artists: ArtistRef[];
    albums: AlbumRef[];
};

export type Artist = ItemId & {
    name: string;
    image?: string;
    spotifyPopularity?: number;
    genres: string[];
    followers: number;
};

export type Album = ItemId & {
    name: string;
    image?: string;
    label?: string;
    spotifyPopularity?: number;
    totalTracks: number;
    releaseDate: number;
    genres: string[];
    artists: ArtistRef[];
};

export type TrackItem = Item & { track: Track };
export type ArtistItem = Item & { artist: Artist };
export type AlbumItem = Item & { album: Album };

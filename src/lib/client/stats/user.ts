import type { AlbumItem, ArtistItem, TrackItem } from "./models";
import { base, fetchWrapper } from "./wrapper";

export interface UserProfile {
    bio?: string;
    pronouns?: string;
    theme?: string;
}

async function profile(username: string) {
    return await fetchWrapper<UserProfile, Error>(
        `${base}/v1/users/${username}/profile`,
    );
}

async function tracks(username: string) {
    return await fetchWrapper<{ items: TrackItem[] }, Error>(
        `${base}/v1/users/${username}/top/tracks`,
    );
}

async function albums(username: string) {
    return await fetchWrapper<{ items: AlbumItem[] }, Error>(
        `${base}/v1/users/${username}/top/albums`,
    );
}

async function artists(username: string) {
    return await fetchWrapper<{ items: ArtistItem[] }, Error>(
        `${base}/v1/users/${username}/top/artists`,
    );
}

export default {
    profile,
    tracks,
    albums,
    artists,
};

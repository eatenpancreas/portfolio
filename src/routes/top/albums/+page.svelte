<script lang="ts">
    import H1 from "$lib/components/basic/H1.svelte";
    import { GlassDiv } from "$lib/components/glass";
    import { onMount } from "svelte";
    import statsapi from "$lib/client/stats";
    import { errorStore, pageStore } from "$lib/store/layout";
    import type { AlbumItem } from "$lib/client/stats/models";
    import Note from "$lib/components/unique/Note.svelte";
    import Link from "$lib/components/basic/Link.svelte";
    import stats from "$lib/components/unique/stats";
    import { m } from '$lib/paraglide/messages.js';
    import { limitText } from "$lib/utils";
    import filterGenres from "../filterGenres";

    let statList: AlbumItem[] = $state([]);

    onMount(async () => {
        const userTracks = await statsapi.user.albums("pascalpascal");
        if (!userTracks.ok) return errorStore.set(userTracks.error.message);
        console.log(userTracks);
        statList = [...userTracks.data.items];
    });
</script>

<H1 title={m["page.music_taste_albums"]()}/>

<stats.List list={statList} searchKeys={["album.name", "album.artists.name"]}>
    {#snippet item(item)}
        {#if item.album.image}
            <stats.Image
                src={item.album.image}
                alt={item.album.name}
            />
        {/if}
        <stats.Details
            title={item.album.name}
            subtitle={
                item.album.artists.map((a) => a.name).join(", ") +
                (item.album.genres.length ?
                    (' - ' + limitText(filterGenres(item.album.genres), 30))
                    : ""
                )
            }
            {item}
        />
    {/snippet}
</stats.List>

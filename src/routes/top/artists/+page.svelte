<script lang="ts">
    import H1 from "$lib/components/basic/H1.svelte";
    import { GlassDiv } from "$lib/components/glass";
    import { onMount } from "svelte";
    import statsapi from "$lib/client/stats";
    import { errorStore } from "$lib/store/layout";
    import type { ArtistItem } from "$lib/client/stats/models";
    import Note from "$lib/components/unique/Note.svelte";
    import Link from "$lib/components/basic/Link.svelte";
    import stats from "$lib/components/unique/stats";
    import { m } from '$lib/paraglide/messages.js';
    import filterGenres from "../filterGenres";

    let statList: ArtistItem[] = $state([]);

    onMount(async () => {
        const userTracks = await statsapi.user.artists("pascalpascal");
        if (!userTracks.ok) return errorStore.set(userTracks.error.message);
        console.log(userTracks);
        statList = [...userTracks.data.items];
    });

</script>

<H1 title={m["page.music_taste_artists"]()}/>

<Note>
    <span class="font-bold">{m["note.pt0"]()}</span> {m["note.pt1"]()}
    <p>
        {m["note.pt2"]()}
        <Link href="https://stats.fm/">stats.fm</Link>
    </p>
</Note>

<stats.List list={statList} searchKeys={["artist.name"]}>
    {#snippet item(item)}
        {#if item.artist.image}
            <stats.Image
                src={item.artist.image}
                alt={item.artist.name}
            />
        {/if}
        <stats.Details
            title={item.artist.name}
            subtitle={filterGenres(item.artist.genres)}
            {item}
        />
    {/snippet}
</stats.List>

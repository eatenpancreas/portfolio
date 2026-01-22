<script lang="ts">
    import H1 from "$lib/components/basic/H1.svelte";
    import { GlassDiv } from "$lib/components/glass";
    import { onMount } from "svelte";
    import statsapi from "$lib/client/stats";
    import { errorStore } from "$lib/store/layout";
    import type { TrackItem } from "$lib/client/stats/models";
    import Note from "$lib/components/unique/Note.svelte";
    import Link from "$lib/components/basic/Link.svelte";
    import stats from "$lib/components/unique/stats";
    import { m } from '$lib/paraglide/messages.js';

    let statList: TrackItem[] = $state([]);

    onMount(async () => {
        const userTracks = await statsapi.user.tracks("pascalpascal");
        if (!userTracks.ok) return errorStore.set(userTracks.error.message);
        console.log(userTracks);
        statList = [...userTracks.data.items];
    });

</script>

<GlassDiv>
    <H1>Top tracks</H1>
</GlassDiv>

<Note>
    <span class="font-bold">{m["note.pt0"]()}</span> {m["note.pt1"]()}
    <p>
        {m["note.pt2"]()}
        <Link href="https://stats.fm/">stats.fm</Link>
    </p>
</Note>

<stats.List list={statList} searchKeys={["track.name", "track.artists.name"]}>
    {#snippet item(item)}
        {#if item.track.albums.length && item.track.albums[0].image}
            <stats.Image
                src={item.track.albums[0].image}
                alt={item.track.name}
            />
        {/if}
        <stats.Details
            title={item.track.name}
            subtitle={item.track.artists.map((a) => a.name).join(", ")}
            {item}
        />
    {/snippet}
</stats.List>

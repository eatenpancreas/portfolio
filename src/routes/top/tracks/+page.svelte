<script lang="ts">
    import H1 from "$lib/components/basic/H1.svelte";
    import { onMount } from "svelte";
    import statsapi from "$lib/client/stats";
    import { errorStore } from "$lib/store/layout";
    import type { TrackItem } from "$lib/client/stats/models";
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

<H1 title={m["page.music_taste_tracks"]()}/>

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

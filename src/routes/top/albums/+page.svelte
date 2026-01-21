<script lang="ts">
    import H1 from "$lib/components/basic/H1.svelte";
    import { GlassDiv } from "$lib/components/glass";
    import { onMount } from "svelte";
    import statsapi from "$lib/client/stats";
    import { errorStore } from "$lib/store/layout";
    import type { AlbumItem } from "$lib/client/stats/models";
    import Note from "$lib/components/unique/Note.svelte";
    import Link from "$lib/components/basic/Link.svelte";
    import stats from "$lib/components/unique/stats";
    import { m } from '$lib/paraglide/messages.js';
    import { limitText } from "$lib/utils";

    let statList: AlbumItem[] = $state([]);

    onMount(async () => {
        const userTracks = await statsapi.user.albums("pascalpascal");
        if (!userTracks.ok) return errorStore.set(userTracks.error.message);
        console.log(userTracks);
        statList = [...userTracks.data.items];
    });

</script>

<GlassDiv>
    <H1>top albums</H1>
</GlassDiv>

<Note>
    <span class="font-bold">{m["note.pt0"]()}</span> {m["note.pt1"]()}
    <p>
        {m["note.pt2"]()}
        <Link href="https://stats.fm/">stats.fm</Link>
    </p>
</Note>

<stats.List list={statList}>
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
                    (' - ' + limitText(item.album.genres.join(", "), 30))
                    : ""
                )
            }
            {item}
        />
    {/snippet}
</stats.List>

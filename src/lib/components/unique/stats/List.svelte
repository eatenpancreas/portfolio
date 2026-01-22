<script lang="ts" generics="T">
    import { GlassButton, GlassTextInput } from "$lib/components/glass";
    import type { Snippet } from "svelte";
    import Fuse from 'fuse.js';
    import { Search } from "@lucide/svelte";

    let {
        list,
        initialCount = 9,
        item,
        searchKeys
    }: { list: T[]; initialCount?: number; item: Snippet<[T]>, searchKeys: string[] } = $props();

    const fuse = $derived(new Fuse(list, {
      keys: searchKeys,
    }))

    let loadedCount = $state(initialCount);
    let filtered = $derived(list);
    let search = $state("");
</script>

<div class="relative max-w-120 mx-auto mt-8">
    <GlassTextInput
        bind:value={search}
        placeholder="Search..."
        oninput={() => {
            if (!search?.length) return filtered = list;
            let result = fuse.search(search).map(result => result.item);
            console.log()
            filtered = result;
        }}
    />
    <div class="absolute right-0 top-0 bottom-0 aspect-square flex justify-center items-center pointer-events-none">
        <Search class="size-6 text-white/30"/>
    </div>
</div>

<div
    class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 py-8 px-4 sm:px-8"
>
    {#each filtered.slice(0, loadedCount) as itemData}
        <div class="pb-4">{@render item(itemData)}</div>
    {/each}
    {#if loadedCount < filtered.length}
        <GlassButton
            onclick={() =>
                (loadedCount = Math.min(loadedCount + 9, filtered.length))}
            class="aspect-square text-2xl"
        >
            Load more...
        </GlassButton>
    {/if}
</div>

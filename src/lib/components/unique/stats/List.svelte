<script lang="ts" generics="T">
    import { GlassButton } from "$lib/components/glass";
    import type { Snippet } from "svelte";

    let {
        list,
        initialCount = 9,
        item,
    }: { list: T[]; initialCount?: number; item: Snippet<[T]> } = $props();

    let loadedCount = $state(initialCount);
</script>

<div
    class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 py-8 px-4 sm:px-8"
>
    {#each list.slice(0, loadedCount) as itemData}
        <div class="pb-4">{@render item(itemData)}</div>
    {/each}
    {#if loadedCount < list.length}
        <GlassButton
            onclick={() =>
                (loadedCount = Math.min(loadedCount + 9, list.length))}
            class="aspect-square text-2xl"
        >
            Load more...
        </GlassButton>
    {/if}
</div>

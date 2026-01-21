<script lang="ts">
    import type { Item } from "$lib/client/stats/models";
    import { m } from "$lib/paraglide/messages";

    let {
        title,
        subtitle,
        columns = [],
        item,
    }: {
        title: string;
        subtitle: string;
        columns?: [string, string][];
        item: Item;
    } = $props();

    let totalColumns: [string, any][] = $derived([
        [
            m["details.minutes_listened"](),
            Math.floor(item.playedMs / 1000 / 60),
        ],
        [m["details.streams"](), item.streams],
        ...columns,
    ]);
</script>

<div class="bg-black/70 mx-2 relative -top-4 pt-6 p-4 rounded-3xl">
    <h2 class="text-lg mt-2">{title}</h2>
    <p class="text-xs text-white/60 mb-2">
        {subtitle}
    </p>
    <p class="py-2 border-b border-gray-400">#{item.position}</p>
    {#each totalColumns as [key, value], i}
        {@const border =
            i < totalColumns.length - 1 ? "border-b border-gray-400" : ""}

        <div class="grid grid-cols-3 py-2 {border}">
            <p class="col-span-2">{key}</p>
            <p class="text-end">
                {value}
            </p>
        </div>
    {/each}
</div>

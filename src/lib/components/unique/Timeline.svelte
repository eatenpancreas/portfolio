<script lang="ts">
    import Link from "../basic/Link.svelte";
    import { GlassDiv } from "../glass";
    type Item = {
        date: string;
        tags: string[];
        title: string;
        location: string;
        location_href: string;
    };
    let { items }: { items: Item[] } = $props();
</script>

<div class="p-4 pl-6 h-full w-full">
    <div class="relative w-fit flex flex-col gap-8 h-full">
        <div
            class="absolute w-1 top-0 left-2 bottom-0 border-s-2 border-purple-400"
        ></div>
        {#each items as item}
            <div class="flex gap-2">
                <GlassDiv class="p-2 mt-1 w-1 h-1"></GlassDiv>
                <div>
                    <p class="text-purple-300/60 px-1 pb-0.5">{item.date}</p>
                    <p class="flex gap-2 text-xs">
                        {#each item.tags as tag}
                            <span class="px-2 bg-purple-200/40 rounded-full">
                                {tag}
                            </span>
                        {/each}
                    </p>
                    <p class="pt-2">
                        {item.title}
                        <Link href={item.location_href}>{item.location}</Link>
                    </p>
                </div>
            </div>
        {/each}
    </div>
</div>

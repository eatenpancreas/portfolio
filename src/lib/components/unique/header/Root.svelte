<script lang="ts">
    import { GlassDiv } from "$lib/components/glass";
    import type { Snippet } from "svelte";

    let {
        children,
    }: {
        children?: Snippet,
    } = $props();
</script>

<GlassDiv
    class="h-20 grid grid-cols-[1fr_auto_1fr] justify-between py-0 fixed left-2 right-2 top-2 z-100 max-lg:px-2 backdrop-blur-md"
>
    {@render children?.()}
</GlassDiv>

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
    class="mb-4 m-2 h-20 grid grid-cols-[1fr_auto_1fr] justify-between py-0 sticky top-2 z-100 max-lg:px-2 backdrop-blur-md"
>
    {@render children?.()}
</GlassDiv>

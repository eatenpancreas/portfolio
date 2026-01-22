<script lang="ts">
    import Link from "$lib/components/basic/Link.svelte";
    import { GlassDiv, glassDivClasses } from "$lib/components/glass";
    import type { Component, Snippet } from "svelte";
    import type { IconProps } from "@lucide/svelte";
    import { DropdownMenu } from "bits-ui";

    let {
        children,
    }: {
        children?: Snippet,
    } = $props();
</script>

<GlassDiv
    class="mb-4 m-2 h-20 grid grid-cols-3 lg:flex justify-between py-0 sticky top-2 z-100 max-lg:px-2 backdrop-blur-md"
>
    {@render children?.()}
</GlassDiv>

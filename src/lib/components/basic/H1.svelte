<script lang="ts">
    import { afterNavigate } from "$app/navigation";
    import { pageStore } from "$lib/store/layout";
    import type { Snippet } from "svelte";

    type Props = { children: Snippet, setTitle?: string | null } | { title: string };
    let props: Props = $props();

    afterNavigate(() => {
        if ("title" in props) pageStore.set(props.title);
        if ("setTitle" in props) pageStore.set(props.setTitle ?? undefined);
    })
</script>

<div class="flex items-center text-2xl md:text-3xl lg:text-4xl py-4 gap-4">
    <hr class="border grow min-w-1" />
    <h1 class="md:mb-4 max-w-[60vw] text-center">
        {#if "title" in props}
            {props.title}
        {:else}
            {@render props.children?.()}
        {/if}
    </h1>
    <hr class="border grow min-w-1" />
</div>

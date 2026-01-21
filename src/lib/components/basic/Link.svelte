<script lang="ts">
    import type { Snippet } from "svelte";
    import { ExternalLink } from "@lucide/svelte";
    import { twMerge } from "tailwind-merge";

    let { href, children, onclick, class: className }: { href: string; children: Snippet, onclick?: () => void, class?: string } = $props();
</script>

<a {onclick} class={twMerge("text-rose-100 hover:text-rose-200 transition-colors font-bold border-b text-center", className)} {href}>
    {@render children()}
    {#if href.startsWith("https://")}
        <ExternalLink class="inline size-3"/>
    {/if}
</a>

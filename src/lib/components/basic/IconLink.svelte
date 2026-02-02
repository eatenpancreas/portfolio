<script lang="ts">
    import type { Snippet } from "svelte";
    import { twMerge } from "tailwind-merge";
    import { buttonStyle } from "$lib/style";

    let { href, children, onclick, class: className }: { href: string; children: Snippet, onclick?: () => void, class?: string } = $props();
</script>

{#if href.startsWith("https://")}
    <a
        {onclick}
        class={twMerge(buttonStyle, className)}
        {href}
        target="_blank"
        rel="noopener noreferrer"
    >
        {@render children()}
    </a>
{:else}
    <a {onclick} class={twMerge(buttonStyle, className)} {href}>
        {@render children()}
    </a>
{/if}

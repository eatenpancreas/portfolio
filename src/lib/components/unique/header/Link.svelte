<script lang="ts">
    import Link from "$lib/components/basic/Link.svelte";
    import type { Snippet } from "svelte";

    let {
        href,
        children,
        onclick,
        variant = "button"
    }: {
        href: string;
        children?: Snippet;
        onclick?: () => void;
        variant?: "button" | "link"
    } = $props();

    let variants = {
        button: "border-b-0 bg-black p-2 px-8 rounded-xl",
        link: ""
    };
</script>

<Link {onclick} class={variants[variant]} {href}>
    {@render children?.()}
</Link>

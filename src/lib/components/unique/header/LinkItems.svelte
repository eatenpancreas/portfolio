<script lang="ts">
    import type { LocalizedPathname } from ".";
    import Link from "./Link.svelte";
    import Item from "./Item.svelte";

    let { items }: { items: { href: LocalizedPathname; text: string }[] } =
        $props();
</script>

{#each items as item, i (i)}
    <Item>
        <Link href={item.href}>{item.text}</Link>
    </Item>
{/each}

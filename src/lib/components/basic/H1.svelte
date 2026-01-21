<script lang="ts">
    import type { Snippet } from "svelte";

    let { children }: { children: Snippet } = $props();
</script>

<div class="flex items-center text-2xl md:text-6xl py-4 gap-4">
    <hr class="border grow" />
    <h1 class="md:mb-4">{@render children?.()}</h1>
    <hr class="border grow" />
</div>

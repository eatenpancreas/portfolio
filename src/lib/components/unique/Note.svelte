<script lang="ts">
    import type { Snippet } from "svelte";

    let { children }: { children?: Snippet } = $props();
</script>

<div class="bg-black/70 p-4 rounded-3xl max-w-120 mx-auto mt-8 text-center">
    {@render children?.()}
</div>

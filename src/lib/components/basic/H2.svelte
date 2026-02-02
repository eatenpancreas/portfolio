<script lang="ts">
    import type { Snippet } from "svelte";

    let { children }: { children: Snippet} = $props()
</script>

<h2
    class="sm:text-xl md:text-3xl text-center bg-clip-text text-transparent
    bg-gradient-to-r from-purple-200 to-purple-400/50 -mt-4 md:-mt-6 mb-10 w-fit mx-auto"
>
    {@render children()}
</h2>

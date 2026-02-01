<script lang="ts">
    import H1 from "$lib/components/basic/H1.svelte";
    import type { TypewriterAction } from "$lib/components/basic/typewriter";
    import Typewriter from "$lib/components/basic/typewriter/Typewriter.svelte";
    import { GlassDiv } from "$lib/components/glass";

    const actions: TypewriterAction[] = [
        { add: "Pascal" },
        { waitMs: 200 },
        { add: " ..." },
        { waitMs: 500 },
        { delete: 3 },
        { waitMs: 1000 },
        { add: "achart va" },
        { delete: 4 },
        { add: "d van Enschut" },
        { moveCursor: -14 },
        { waitMs: 300 },
        { moveCursor: -3 },
        { waitMs: 500 },
        { delete: 1 },
        { waitMs: 200 },
        { add: "d" },
        { waitMs: 200 },
        { add: "'A" },
        { stopTyping: true },
    ];
</script>

<img
    class="rounded-full w-40 md:w-45 lg:w-50 max-md:mt-4 mx-auto mb-8"
    src="/me.jpg"
    alt="Me"
/>

<H1 setTitle={null}><Typewriter {actions} /></H1>
<GlassDiv></GlassDiv>

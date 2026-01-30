<script lang="ts">
    import H1 from "$lib/components/basic/H1.svelte";
    import type { TypewriterAction } from "$lib/components/basic/typewriter";
    import Typewriter from "$lib/components/basic/typewriter/Typewriter.svelte";
    import { GlassDiv } from "$lib/components/glass";

    const actions: TypewriterAction[] = [
        { set: "Pascal d ..." },
        { delete: 4 },
        { waitMs: 40 },
        { add: "acha" },
        { delete: 3 },
        { add: "'" },
    ];
</script>

<img class="rounded-full max-w-80 mx-auto" src="/me.jpg" alt="Me" />

<GlassDiv>
    <H1><Typewriter {actions} /></H1>
</GlassDiv>

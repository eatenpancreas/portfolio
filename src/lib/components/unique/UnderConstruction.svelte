<script>
    import { GlassDiv } from "$lib/components/glass";
    import { m } from "$lib/paraglide/messages";
    import { Construction } from "@lucide/svelte";
</script>

<GlassDiv
    class="grow flex justify-center items-center flex-col text-xl md:text-2xl lg:text-4xl"
>
    <p>{m["errors.under_construction"]()}</p>
    <Construction class="size-40 text-white" />
</GlassDiv>

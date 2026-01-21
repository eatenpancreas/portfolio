<script>
    import { page } from "$app/state";
    import H1 from "$lib/components/basic/H1.svelte";
    import { GlassDiv } from "$lib/components/glass";
</script>

<GlassDiv>
    <H1>{page.status} {page.error?.message}</H1>
</GlassDiv>

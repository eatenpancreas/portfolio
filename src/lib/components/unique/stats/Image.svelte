<script lang="ts">
    let { src, alt }: { src: string; alt: string } = $props();
</script>

<img
    class="rounded-xl shadow-xl shadow-black/50 relative z-10 aspect-square w-full object-cover"
    {src}
    {alt}
/>

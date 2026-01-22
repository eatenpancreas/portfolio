<script lang="ts">
    import { goto } from "$app/navigation";
    import { localizeLink } from "$lib/utils";

    let { src }: { src: string } = $props();
</script>

<button
    class="h-full max-h-20 cursor-pointer"
    onclick={() => goto(localizeLink("/"))}
>
    <img class="h-full" {src} alt="Home" />
</button>

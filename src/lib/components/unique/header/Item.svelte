<script lang="ts">
    import { min_w_lg } from "$lib/utils";
    import { DropdownMenu } from "bits-ui";
    import type { Snippet } from "svelte";

    let { children }: { children?: Snippet } = $props();
</script>


{#if min_w_lg.current}
    {@render children?.()}
{:else}
    <DropdownMenu.Item class="flex flex-col gap-4">
        {@render children?.()}
    </DropdownMenu.Item>
{/if}

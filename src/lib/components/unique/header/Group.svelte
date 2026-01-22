<script lang="ts">
    import type { Snippet } from "svelte";
    import { DropdownMenu } from "bits-ui";
    import { min_w_lg } from "$lib/utils";
    import { glassDivClasses } from "$lib/components/glass";
    import { afterNavigate } from "$app/navigation";

    let {
        children,
        heading
    }: {
        children?: Snippet,
        heading?: string,
    } = $props();


    let open: boolean = $state(false)

    afterNavigate(() => {
        open = false;
    })
</script>


{#if min_w_lg.current}
    {#if heading}
        <DropdownMenu.Root bind:open={open}>
            <DropdownMenu.Trigger class="text-rose-100 hover:text-rose-200 font-bold border-b text-center transition-colors cursor-pointer">
                {heading}
            </DropdownMenu.Trigger>
            <DropdownMenu.Content
                class="{glassDivClasses} bg-[#251e22]/90! px-4! flex flex-col gap-4">
                {@render children?.()}
            </DropdownMenu.Content>
        </DropdownMenu.Root>
    {:else}
        {@render children?.()}
    {/if}
{:else}
    <DropdownMenu.Group class="flex flex-col gap-4 min-w-40">
        {#if heading}
            <DropdownMenu.GroupHeading class="text-xl text-center w-full text-rose-100 font-light">{heading}</DropdownMenu.GroupHeading>
        {/if}
        {@render children?.()}
    </DropdownMenu.Group>
{/if}

<script lang="ts">
    import type { Snippet } from "svelte";
    import { DropdownMenu } from "bits-ui";
    import { min_w_lg } from "$lib/utils";
    import { GlassDiv, glassDivClasses } from "$lib/components/glass";
    import { afterNavigate } from "$app/navigation";
    import { buttonStyle } from "$lib/style";

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
            <DropdownMenu.Trigger class="{buttonStyle} font-bold border-b text-center cursor-pointer">
                {heading}
            </DropdownMenu.Trigger>
            <DropdownMenu.Content class="pt-4">
                <GlassDiv class="p-4! flex flex-col gap-2 bg-black">
                    {@render children?.()}
                </GlassDiv>
            </DropdownMenu.Content>
        </DropdownMenu.Root>
    {:else}
        {@render children?.()}
    {/if}
{:else}
    <DropdownMenu.Group class="flex flex-col gap-2 min-w-40">
        {#if heading}
            <DropdownMenu.GroupHeading class="text-xl text-center w-full font-light border-b not-first:mt-4">{heading}</DropdownMenu.GroupHeading>
        {/if}
        {@render children?.()}
    </DropdownMenu.Group>
{/if}

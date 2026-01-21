<script lang="ts">
    import Link from "$lib/components/basic/Link.svelte";
    import { GlassDiv, glassDivClasses } from "$lib/components/glass";
    import type { Component } from "svelte";
    import type { Item } from ".";
    import type { IconProps } from "@lucide/svelte";
    import { DropdownMenu } from "bits-ui";

    let {
        left,
        center,
        right,
        leftCollapseIcon,
        centerCollapseIcon,
        rightCollapseIcon,
    }: {
        left?: Item[],
        center?: Item[],
        right?: Item[],
        leftCollapseIcon?: Component<IconProps>,
        centerCollapseIcon?: Component<IconProps>,
        rightCollapseIcon?: Component<IconProps>,
    } = $props();
</script>

{#snippet itemsDisplay(items: Item[], CollapseIcon?: Component, className?: string)}
    {@const display = CollapseIcon == undefined ? "flex" : "hidden lg:flex"}
    <div class="{display} gap-2 h-full items-center max-h-20 {className}">
        {#each items as item, i (i)}
            {#if typeof item == "object"}
                <Link href={item.href}>{item.text}</Link>
            {:else}
                {@render item()}
            {/if}
            {#if i < items.length - 1}
                <div>&#x2022;</div>
            {/if}
        {/each}
    </div>
    {#if CollapseIcon}
        <div class="flex lg:hidden gap-2 h-full items-center max-h-20 {className}">
            <DropdownMenu.Root>
                <DropdownMenu.Trigger>
                    <CollapseIcon class="size-10 text-rose-100 hover:text-rose-200 transition-colors"/>
                </DropdownMenu.Trigger>

                <DropdownMenu.Content class="{glassDivClasses} bg-[#251e22]/90! px-4!">
              		<DropdownMenu.Group class="flex flex-col gap-4">
                        {#each items as item, i (i)}
                            <DropdownMenu.Item class="flex flex-col gap-4 min-w-20">
                                {#if typeof item == "object"}
                                    <Link class="border-b-0 bg-[#0d0b0c] p-2 px-8 rounded-xl" href={item.href}>{item.text}</Link>
                                {:else}
                                    {@render item()}
                                {/if}
                            </DropdownMenu.Item>
                        {/each}
              		</DropdownMenu.Group>
               	</DropdownMenu.Content>
            </DropdownMenu.Root>
        </div>
    {/if}
{/snippet}

<GlassDiv
    class="mb-4 m-2 h-20 grid grid-cols-3 lg:flex justify-between py-0 sticky top-2 z-100 max-lg:px-2 backdrop-blur-md"
>
    {@render itemsDisplay(left ?? [], leftCollapseIcon)}
    {@render itemsDisplay(center ?? [], centerCollapseIcon, "justify-center grow")}
    {@render itemsDisplay(right ?? [], rightCollapseIcon, "max-lg:justify-end pr-5")}
</GlassDiv>

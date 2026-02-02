<script lang="ts">
    import type { Snippet } from "svelte";
    import { DropdownMenu } from "bits-ui";
    import { GlassDiv, glassDivClasses } from "$lib/components/glass";
    import { twMerge } from "tailwind-merge";
    import { min_w_lg } from "$lib/utils";
    import { afterNavigate } from "$app/navigation";

    let { collapsed, children, class: className }: { collapsed: Snippet; children?: Snippet, class?: string } =
        $props();

    let open: boolean = $state(false)

    afterNavigate(() => {
        open = false;
    })
</script>

{#if min_w_lg.current}
    <div class={twMerge("flex gap-4 h-full items-center justify-center max-h-20", className)}>
        {@render children?.()}
    </div>
{:else}
    <div class={twMerge("flex lg:hidden gap-2 h-full items-center justify-center max-h-20", className)}>
        <DropdownMenu.Root bind:open={open}>
            <DropdownMenu.Trigger >
                {@render collapsed()}
            </DropdownMenu.Trigger>

            <DropdownMenu.Content class="pt-4">
                <GlassDiv class="p-4! flex flex-col gap-2 bg-black">
                    {@render children?.()}
                </GlassDiv>
            </DropdownMenu.Content>
        </DropdownMenu.Root>
    </div>
{/if}

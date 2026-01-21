<script lang="ts">
    import { errorStore } from "$lib/store/layout";
    import { GlassDiv } from "$lib/components/glass";
    import { X } from "@lucide/svelte";
    import { slide } from "svelte/transition";
</script>

{#if $errorStore}
    <div
        class="fixed bottom-8 left-8 right-8"
        transition:slide={{ duration: 300 }}
    >
        <GlassDiv class=" bg-red-800/50 flex justify-between items-center">
            <div>
                <p class="text-xl font-bold">An error occurred!</p>
                <p class="text-red-200">{$errorStore}</p>
            </div>
            <button
                onclick={() => errorStore.set(undefined)}
                class="hover:bg-white/50 transition-colors rounded-full p-2"
            >
                <X />
            </button>
        </GlassDiv>
    </div>
{/if}

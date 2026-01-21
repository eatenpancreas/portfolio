<script lang="ts">
    import type { HTMLAttributes } from "svelte/elements";
    import { twMerge } from "tailwind-merge";

    let { class: className, children, ...props }: HTMLAttributes<HTMLButtonElement> =
        $props();
</script>

<button
    class={twMerge(
        "py-6 px-8 text-white/80 backdrop-blur-xs backdrop-saturate-200 bg-white/8 hover:bg-white/20 border border-white/12 shadow-glass rounded-3xl transition-all relative hover:-top-1 hover:backdrop-brightness-120",
        className as any,
    )}
    {...props}
>
    {@render children?.()}
</button>

<style>
    .shadow-glass {
        /* Layered shadows for depth */
        box-shadow:
            0 32px 64px rgba(0, 0, 0, 0.3),
            /* Drop shadow */ 0 0 0 1px rgba(255, 255, 255, 0.05) inset,
            /* Inner edge */ 0 1px 0 rgba(255, 255, 255, 0.15) inset; /* Top highlight */
    }
</style>

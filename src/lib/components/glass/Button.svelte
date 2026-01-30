<script lang="ts">
    import type { HTMLAttributes } from "svelte/elements";
    import { twMerge } from "tailwind-merge";

    let { class: className, children, ...props }: HTMLAttributes<HTMLButtonElement> =
        $props();
</script>

<button
    class={twMerge(
        "py-6 px-8 text-white/80 backdrop-blur-xs backdrop-saturate-200 bg-white/8 hover:bg-white/20 border border-white/12 shadow-glass shadow-glass-hover rounded-3xl transition-all relative hover:-top-1 hover:backdrop-brightness-120",
        className as any,
    )}
    {...props}
>
    {@render children?.()}
</button>

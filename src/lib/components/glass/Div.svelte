<script lang="ts">
    import type { HTMLAttributes } from "svelte/elements";
    import { twMerge } from "tailwind-merge";
    import { glassDivClasses } from ".";

    let { class: className, children, ...props }: HTMLAttributes<HTMLDivElement> =
        $props();
</script>

<div
    class={twMerge(
        glassDivClasses,
        className as any,
    )}
    {...props}
>
    {@render children?.()}
</div>

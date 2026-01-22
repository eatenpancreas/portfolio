<script lang="ts">
    import type { HTMLAttributes } from "svelte/elements";
    import { twMerge } from "tailwind-merge";
    import { glassDivClasses } from ".";

    let { class: className, value = $bindable(""), ...props }: Omit<HTMLAttributes<HTMLInputElement>, "type"> & { value?: string } =
        $props();
</script>

<input
    type="text"
    bind:value={value}
    class={twMerge(
        "w-full focus:outline-none transition-colors focus:bg-transparent",
        glassDivClasses,
        className as any,
    )}
    {...props}
>

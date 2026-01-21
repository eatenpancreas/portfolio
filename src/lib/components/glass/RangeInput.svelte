<script lang="ts">
    import type { HTMLAttributes } from "svelte/elements";
    import { twMerge } from "tailwind-merge";

    let { class: className, ...props }: HTMLAttributes<HTMLDivElement> =
        $props();
</script>

<input
    type="range"
    class={twMerge("w-full cursor-pointer appearance-none bg-white/20 rounded-full h-2", className as any)}
    {...props}
/>

<style>
    input[type="range" i]::-webkit-slider-thumb,
    input[type="range"]::-moz-range-thumb {
        /* bg-white/8 */
        background-color: color-mix(
            in oklab,
            var(--color-white) /* #fff = #ffffff */ 8%,
            transparent
        );

        /* backdrop-blur-xs */
        --tw-backdrop-blur: blur(var(--blur-xs) /* 4px */);
        -webkit-backdrop-filter: var(--tw-backdrop-blur,)
            var(--tw-backdrop-brightness,) var(--tw-backdrop-contrast,)
            var(--tw-backdrop-grayscale,) var(--tw-backdrop-hue-rotate,)
            var(--tw-backdrop-invert,) var(--tw-backdrop-opacity,)
            var(--tw-backdrop-saturate,) var(--tw-backdrop-sepia,);
        backdrop-filter: var(--tw-backdrop-blur,) var(--tw-backdrop-brightness,)
            var(--tw-backdrop-contrast,) var(--tw-backdrop-grayscale,)
            var(--tw-backdrop-hue-rotate,) var(--tw-backdrop-invert,)
            var(--tw-backdrop-opacity,) var(--tw-backdrop-saturate,)
            var(--tw-backdrop-sepia,);

        /* backdrop-saturate-180 */
        --tw-backdrop-saturate: saturate(180%);
        -webkit-backdrop-filter: var(--tw-backdrop-blur,)
            var(--tw-backdrop-brightness,) var(--tw-backdrop-contrast,)
            var(--tw-backdrop-grayscale,) var(--tw-backdrop-hue-rotate,)
            var(--tw-backdrop-invert,) var(--tw-backdrop-opacity,)
            var(--tw-backdrop-saturate,) var(--tw-backdrop-sepia,);
        backdrop-filter: var(--tw-backdrop-blur,) var(--tw-backdrop-brightness,)
            var(--tw-backdrop-contrast,) var(--tw-backdrop-grayscale,)
            var(--tw-backdrop-hue-rotate,) var(--tw-backdrop-invert,)
            var(--tw-backdrop-opacity,) var(--tw-backdrop-saturate,)
            var(--tw-backdrop-sepia,);

        /* border */
        border-style: var(--tw-border-style);
        border-width: 1px;

        /* border */
        border-style: var(--tw-border-style);
        border-width: 1px;

        /* border-white/12 */
        border-color: color-mix(
            in oklab,
            var(--color-white) /* #fff = #ffffff */ 12%,
            transparent
        );

        /* rounded-3xl */
        border-radius: var(--radius-3xl) /* 1.5rem = 24px */;

        /* Layered shadows for depth */
        box-shadow:
            0 32px 64px rgba(0, 0, 0, 0.3),
            /* Drop shadow */ 0 0 0 1px rgba(255, 255, 255, 0.05) inset,
            /* Inner edge */ 0 1px 0 rgba(255, 255, 255, 0.15) inset; /* Top highlight */
    }
</style>

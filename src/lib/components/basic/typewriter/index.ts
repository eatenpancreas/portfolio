import Typewriter from "./Typewriter.svelte";

export type TypewriterAction =
    | { set: string }
    | { delete: number }
    | { add: string }
    | { waitMs: number };

export { Typewriter };

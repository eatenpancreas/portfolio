import Typewriter from "./Typewriter.svelte";

export type TypewriterAction =
    | { set: string }
    | { delete: number }
    | { add: string }
    | { moveCursor: number }
    | { setCursor: number }
    | { waitMs: number }
    | { stopTyping: true };

export { Typewriter };

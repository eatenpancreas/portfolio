<script lang="ts">
    import type { TypewriterAction } from ".";
    import { delay } from "$lib/utils";
    import { onMount } from "svelte";

    type Props = {
        actions: TypewriterAction[];
        textSpeed?: number;
        blinkSpeed?: number;
        onfinish?: () => void;
    };

    let {
        actions,
        onfinish,
        textSpeed = 200,
        blinkSpeed = 400,
    }: Props = $props();

    let baseText = $state("");
    let cursorIndex = $state(0);
    let cursorBlink = $state(false);
    let isTyping = $state(true);

    // Track the current action's progress
    let currentActionProgress = $state(0);
    let currentAction = $state<TypewriterAction | null>(null);

    onMount(() => {
        doBlinking();
        processActions();
    });

    async function processActions() {
        for (let i = 0; i < actions.length; i++) {
            currentAction = actions[i];
            currentActionProgress = 0;

            if ("set" in currentAction) {
                baseText = currentAction.set;
                cursorIndex = baseText.length;
                await typeText(currentAction.set.length);
            } else if ("delete" in currentAction) {
                await deleteText(currentAction.delete);
            } else if ("add" in currentAction) {
                await addText(currentAction.add);
            } else if ("moveCursor" in currentAction) {
                await moveCursor(cursorIndex + currentAction.moveCursor);
            } else if ("setCursor" in currentAction) {
                cursorIndex = Math.max(
                    0,
                    Math.min(baseText.length, currentAction.setCursor),
                );
            } else if ("waitMs" in currentAction) {
                await delay(currentAction.waitMs);
            } else if ("stopTyping" in currentAction) {
                isTyping = false;
            }
        }

        onfinish?.();
    }

    async function typeText(targetLength: number) {
        while (cursorIndex < targetLength) {
            await delay(textSpeed);
            cursorIndex++;
            currentActionProgress++;
        }
    }

    async function deleteText(amount: number) {
        const targetCursor = Math.max(0, cursorIndex - amount);
        while (cursorIndex > targetCursor) {
            await delay(textSpeed);
            baseText =
                baseText.slice(0, cursorIndex - 1) +
                baseText.slice(cursorIndex);
            cursorIndex--;
            currentActionProgress++;
        }
    }

    async function addText(text: string) {
        for (let i = 0; i < text.length; i++) {
            await delay(textSpeed);
            baseText =
                baseText.slice(0, cursorIndex) +
                text[i] +
                baseText.slice(cursorIndex);
            cursorIndex++;
            currentActionProgress++;
        }
    }

    async function moveCursor(targetPosition: number) {
        const clampedTarget = Math.max(
            0,
            Math.min(baseText.length, targetPosition),
        );

        while (cursorIndex !== clampedTarget) {
            await delay(textSpeed);
            if (cursorIndex < clampedTarget) {
                cursorIndex++;
            } else {
                cursorIndex--;
            }
            currentActionProgress++;
        }
    }

    async function doBlinking() {
        while (true) {
            await delay(blinkSpeed);
            cursorBlink = !cursorBlink;
        }
    }
</script>

{#if isTyping}
    {baseText.slice(0, cursorIndex)}
    <span
        class="{cursorBlink
            ? 'opacity-0'
            : ''} inline-block w-0 relative -left-2"
    >
        |
    </span>
    {baseText.slice(cursorIndex)}
{:else}
    {baseText}
{/if}

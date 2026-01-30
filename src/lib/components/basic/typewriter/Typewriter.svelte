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

    let actionIndex = 0;
    let justFinished = false;

    let targetTextIndex = $state(0);
    let currentTextIndex = $state(0);
    let baseText = $state("");

    let cursorIndex = $state(0);
    let cursorBlink = $state(false);

    let currentText = $derived(baseText.slice(0, currentTextIndex));

    onMount(() => {
        textIncrement();
        doBlinking();
        onFinishAction();
    });

    async function onFinishAction() {
        if (actionIndex >= actions.length) onfinish?.();
        const action = actions[actionIndex];
        if ("set" in action) setText(action.set);
        else if ("delete" in action) deleteText(action.delete);
        else if ("add" in action) addText(action.add);
        else if ("waitMs" in action) {
            await delay(action.waitMs);
            justFinished = true;
        }
        actionIndex++;
    }

    function setText(text: string) {
        baseText = text;
        targetTextIndex = text.length;
        currentTextIndex = 0;
        cursorIndex = 0;
    }

    function deleteText(amount: number) {
        targetTextIndex -= amount;
    }

    function addText(text: string) {
        baseText = currentText + text;
        targetTextIndex = baseText.length;
    }

    async function doBlinking() {
        while (true) {
            await delay(blinkSpeed);
            cursorBlink = !cursorBlink;
        }
    }

    async function textIncrement() {
        while (true) {
            await delay(textSpeed);
            if (currentTextIndex < targetTextIndex) {
                currentTextIndex += 1;
                cursorIndex += 1;
                justFinished = true;
            } else if (currentTextIndex > targetTextIndex) {
                currentTextIndex -= 1;
                cursorIndex -= 1;
                justFinished = true;
            } else if (justFinished) {
                justFinished = false;
                onFinishAction();
            }
        }
    }
</script>

{currentText.slice(0, cursorIndex)}
<span class={cursorBlink ? "opacity-0" : ""}>|</span>
{currentText.slice(cursorIndex, currentText.length)}

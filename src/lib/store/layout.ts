import { getLocale, setLocale } from "$lib/paraglide/runtime";
import { writable, type Writable } from "svelte/store";

export const localeStore = writable(getLocale());

localeStore.subscribe((locale) => {
    setLocale(locale);
});

export const pageStore: Writable<string | undefined> = writable(undefined);
export const errorStore = writable<string | undefined>();

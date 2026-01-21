import { getLocale, setLocale } from "$lib/paraglide/runtime";
import { writable } from "svelte/store";

export const localeStore = writable(getLocale());

localeStore.subscribe((locale) => {
    setLocale(locale);
});

export const errorStore = writable<string | undefined>();

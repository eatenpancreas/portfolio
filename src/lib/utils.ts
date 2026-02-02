import type { ResolvedPathname } from "$app/types";
import { get } from "svelte/store";
import type { LocalizedPathname } from "./components/unique/header";
import { localizeHref, type Locale } from "./paraglide/runtime";
import { localeStore } from "./store/layout";
import { MediaQuery } from "svelte/reactivity";

export const delay = (ms: number) =>
    new Promise((resolve) => setTimeout(resolve, ms));

// const data = m["note.pt0"]();

export function limitText(text: string, maxLength: number): string {
    if (text.length <= maxLength) return text;
    return text.slice(0, maxLength - 3) + "...";
}

export function localizeLink(
    route: ResolvedPathname,
    locale?: Locale,
): LocalizedPathname {
    return localizeHref(route, {
        locale: locale ?? get(localeStore),
    }) as LocalizedPathname;
}

export const min_w_lg = new MediaQuery("min-width: 1024px");

import type { Snippet } from "svelte";
import Header from "./Header.svelte";
import type { ResolvedPathname } from "$app/types";
import type { Locale } from "$lib/paraglide/runtime";

export type LocalizedPathname =
    | `${Locale}${ResolvedPathname}`
    | ResolvedPathname;
export type Link = {
    text: string;
    href: LocalizedPathname;
};

export type Item = Link | Snippet;

export { Header };

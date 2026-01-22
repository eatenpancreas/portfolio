import Collapsing from "./Collapsing.svelte";
import Root from "./Root.svelte";
import Link from "./Link.svelte";
import LinkItems from "./LinkItems.svelte";
import Group from "./Group.svelte";
import Item from "./Item.svelte";
import HomeImage from "./HomeImage.svelte";

import type { ResolvedPathname } from "$app/types";
import type { Locale } from "$lib/paraglide/runtime";

export type LocalizedPathname =
    | `${Locale}${ResolvedPathname}`
    | ResolvedPathname;

export default {
    Root,
    Collapsing,
    Link,
    Group,
    LinkItems,
    Item,
    HomeImage,
};

<script lang="ts">
	import { page } from '$app/state';
	import { locales } from '$lib/paraglide/runtime';
	import './layout.css';
	import header from '$lib/components/unique/header';
	import GlobalErrorDisplay from '$lib/components/unique/GlobalErrorDisplay.svelte';
    import { localizeLink, min_w_lg } from '$lib/utils';
    import { Menu, Settings } from '@lucide/svelte';
    import { m } from '$lib/paraglide/messages';
    import { localeStore, pageStore } from '$lib/store/layout';

	let { children } = $props();
</script>


<svelte:head>
    <title>{$pageStore? "Pascal d'AvE - " + $pageStore : "Pascal d'Achard van Enschut"}</title>
    <link rel="icon" href="/dachard-simple.svg" />
</svelte:head>

<GlobalErrorDisplay />

<div
	class="fixed -right-4 inset-0 bg-repeat bg-size-[30rem] -z-10"
	style="background-image: url(/pattern.webp)"
></div>

<div class="h-screen flex flex-col min-w-60 pt-8">
    <header.Root>
        <div>
            <header.HomeImage src="/dachard.svg"/>
        </div>
        <header.Collapsing>
            {#snippet collapsed()}
                <Menu class="cursor-pointer"/>
            {/snippet}

            <header.Group>
                <header.Item>
                    <header.Link variant={min_w_lg.current ? "link" : "button"} href={localizeLink('/')}>
                        {m["page.about_me"]()}
                    </header.Link>
                </header.Item>
            </header.Group>
            <header.Group>
                <header.Item>
                    <header.Link variant={min_w_lg.current ? "link" : "button"} href={localizeLink('/projects')}>
                        {m["page.projects"]()}
                    </header.Link>
                </header.Item>
            </header.Group>
            <header.Group heading={m["page.music_taste"]()}>
                <header.LinkItems items={[
              		{ href: localizeLink("/top/tracks"), text: m["page.music_taste_tracks"]() },
              		{ href: localizeLink("/top/albums"), text: m["page.music_taste_albums"]() },
              		{ href: localizeLink("/top/artists"), text: m["page.music_taste_artists"]() },
                ]}/>
            </header.Group>
        </header.Collapsing>

        <header.Collapsing class="justify-end pr-5">
            {#snippet collapsed()}
                <Settings class="cursor-pointer"/>
            {/snippet}

            <header.Group heading={m["header.switch_language"]()}>
                {#each locales as locale}
                    <header.Item>
                        <header.Link
                            onclick={() => localeStore.set(locale)}
                            href={localizeLink(page.url.pathname, locale)}
                        >
                            {m["language"]({}, { locale })}
                        </header.Link>
                    </header.Item>
                {/each}
            </header.Group>
        </header.Collapsing>
    </header.Root>

    <main
    	class="p-2 sm:p-8 text-1xl text-white max-w-6xl mx-auto w-full grow flex flex-col h-full overflow-auto pt-26!"
    >
    	{@render children()}
    </main>
</div>

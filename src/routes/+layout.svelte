<script lang="ts">
	import { page } from '$app/state';
	import { locales } from '$lib/paraglide/runtime';
	import './layout.css';
	import { Header } from '$lib/components/unique/header';
	import GlobalErrorDisplay from '$lib/components/unique/GlobalErrorDisplay.svelte';
    import { localizeLink } from '$lib/utils';
    import { Menu, Settings } from '@lucide/svelte';
    import { m } from '$lib/paraglide/messages';
    import { goto } from '$app/navigation';

	let { children } = $props();
</script>


<svelte:head>
    <title>Pascal d'Achard van Enschut</title>
    <link rel="icon" href="/dachard-simple.svg" />
</svelte:head>

{#snippet logo()}
    <button class="h-full" onclick={() => goto(localizeLink('/'))}>
        <img class="h-full" src="/dachard.svg" alt="Logo" />
    </button>
{/snippet}

<Header
	left={[logo]}
	center={[
		{ href: localizeLink('/'), text: "home" },
		{ href: localizeLink("/top/tracks"), text: "top tracks" },
		{ href: localizeLink("/top/albums"), text: "top albums" },
		{ href: localizeLink("/top/artists"), text: "top artists" },
	]}
	centerCollapseIcon={Menu}
	right={locales.map(locale => ({ href: localizeLink(page.url.pathname, locale), text: m["language"]({}, { locale })}))}
	rightCollapseIcon={Settings}
/>
<GlobalErrorDisplay />

<div
	class="fixed -right-4 inset-0 bg-repeat bg-size-[30rem] -z-10"
	style="background-image: url(/pattern.jpg)"
></div>

<main
	class="p-2 sm:p-8 text-1xl text-white max-w-6xl mx-auto"
>
	{@render children()}
</main>

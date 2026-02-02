<script lang="ts">
    import H1 from "$lib/components/basic/H1.svelte";
    import H2 from "$lib/components/basic/H2.svelte";
    import IconLink from "$lib/components/basic/IconLink.svelte";
    import Link from "$lib/components/basic/Link.svelte";
    import type { TypewriterAction } from "$lib/components/basic/typewriter";
    import Typewriter from "$lib/components/basic/typewriter/Typewriter.svelte";
    import { GlassDiv } from "$lib/components/glass";
    import Timeline from "$lib/components/unique/Timeline.svelte";
    import { m } from "$lib/paraglide/messages";
    import { localeStore } from "$lib/store/layout";
    import { buttonStyle } from "$lib/style";
    import { min_w_lg } from "$lib/utils";
    import { Github, Linkedin } from "@lucide/svelte";

    const actions: TypewriterAction[] = [
        { add: "Pascal" },
        { waitMs: 200 },
        { add: " ..." },
        { waitMs: 500 },
        { delete: 3 },
        { waitMs: 1000 },
        { add: "achart va" },
        { delete: 4 },
        { add: "d van Enschut" },
        { moveCursor: -14 },
        { waitMs: 300 },
        { moveCursor: -3 },
        { waitMs: 500 },
        { delete: 1 },
        { waitMs: 200 },
        { add: "d" },
        { waitMs: 200 },
        { add: "'A" },
        { stopTyping: true },
    ];
</script>

<img
    class="rounded-full w-40 md:w-45 lg:w-50 max-md:mt-4 mx-auto mb-8"
    src="/me.webp"
    alt="Me"
/>

<GlassDiv class="p-3 flex gap-4 w-fit mx-auto">
    <IconLink href="https://github.com/eatenpancreas">
        <Github class={buttonStyle} />
    </IconLink>
    <IconLink href="https://nl.linkedin.com/in/pasdachard">
        <Linkedin class={buttonStyle} />
    </IconLink>
</GlassDiv>

<H1 setTitle={null}><Typewriter {actions} /></H1>
<H2>{m["page.about_me"]()}</H2>

<div class="grid gap-2 lg:gap-y-16 lg:grid-cols-3">
    <GlassDiv class="md:text-lg lg:text-xl lg:col-span-2">
        <p class="mb-2">
            {m["index.hi"]()}
            <Link href="https://www.saxion.edu/">Saxion</Link>.
        </p>
        <p>
            {m["index.games"]()}

            <img
                class="mt-4 rounded-xl"
                alt="Obsidian"
                src="/hobby/obsidian.webp"
            />
        </p>
    </GlassDiv>

    <Timeline
        items={[
            {
                date: "Aug 2025 - " + m["index.present_day"](),
                tags: ["HBO", "Associate Degree", m["index.tags.treasurer"]()],
                title: m["index.titles.software_dev"](),
                location: "Saxion University of Applied Sciences",
                location_href: "https://www.saxion.edu/",
            },
            {
                date: "Aug 2022 - Jun 2025",
                tags: ["MBO-4", m["index.tags.acceleration_program"]()],
                title: m["index.titles.software_dev"](),
                location: "ROC van Twente",
                location_href: "https://www.rocvantwente.nl/",
            },
            {
                date: "...",
                tags: [],
                title: m["index.titles.previous_studies"](),
                location: "",
                location_href: "",
            },
        ]}
    />

    {#if !min_w_lg.current}
        <GlassDiv class="md:text-lg lg:text-xl lg:col-span-2 max-lg:mt-16">
            <p>{m["index.saas_applications"]()}</p>
        </GlassDiv>
    {/if}

    <Timeline
        items={[
            {
                date: "Dec 2025 - " + m["index.present_day"](),
                tags: [
                    "Rotterdam",
                    m["index.tags.hours"]({ hours: 16 }),
                    m["index.tags.remote"](),
                ],
                title: m["index.titles.codehive"](),
                location: "CodeHive",
                location_href:
                    "https://codehive.nl/" + ($localeStore == "nl" ? "" : "en"),
            },
            {
                date: "Sept 2024 - Jan 2025",
                tags: [
                    "Hengelo",
                    m["index.tags.internship"](),
                    m["index.tags.onsite"](),
                ],
                title: m["index.titles.emmedy"](),
                location: "Emmedy",
                location_href: "https://emmedy.nl/",
            },
            {
                date: "Jun 2023 - Aug 2023",
                tags: [
                    "Hengevelde",
                    m["index.tags.hours"]({ hours: 40 }),
                    m["index.tags.onsite"](),
                ],
                title: m["index.titles.jitso_1"](),
                location: "Jitso",
                location_href: "https://jitso.nl/",
            },
            {
                date: "Mar 2023 - Jun 2023",
                tags: [
                    "Hengevelde",
                    m["index.tags.internship"](),
                    m["index.tags.onsite"](),
                ],
                title: m["index.titles.jitso_0"](),
                location: "Jitso",
                location_href: "https://jitso.nl/",
            },
        ]}
    />

    {#if min_w_lg.current}
        <GlassDiv class="md:text-lg lg:text-xl lg:col-span-2 max-lg:mt-16">
            <p>{m["index.saas_applications"]()}</p>
        </GlassDiv>
    {/if}
</div>

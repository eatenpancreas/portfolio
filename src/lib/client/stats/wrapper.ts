export const base = "https://api.stats.fm/api";

type Result<T, E> = { ok: true; data: T } | { ok: false; error: E };

export async function fetchWrapper<T, E extends Error>(
    url: string,
): Promise<Result<T, E>> {
    try {
        const response = await fetch(url);
        const json = await response.json();
        if (response.ok) {
            return { ok: true, data: json };
        } else {
            return { ok: false, error: json };
        }
    } catch (error) {
        console.error("Error fetching " + url, error);
        return { ok: false, error: error as E };
    }
}

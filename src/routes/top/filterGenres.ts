export default function (genres: string[]) {
    return genres.filter((genre) => genre !== "Music").join(", ");
}

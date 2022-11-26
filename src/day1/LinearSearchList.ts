export default function linear_search(
    haystack: number[],
    needle: number,
): boolean {
    for (const entity of haystack) {
        if (entity === needle) return true;
    }
    return false;
}

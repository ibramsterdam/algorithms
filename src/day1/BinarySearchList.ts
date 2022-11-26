export default function bs_list(haystack: number[], needle: number): boolean {
    let low = 0;
    let high = haystack.length;

    do {
        const midpoint = Math.floor(low + (high - low) / 2);
        const value = haystack[midpoint];

        if (needle === value) return true;
        if (needle > value) low = midpoint + 1;
        if (needle < value) high = midpoint;
    } while (low < high);

    return false;
}

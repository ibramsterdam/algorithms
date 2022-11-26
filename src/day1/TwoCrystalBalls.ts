export default function two_crystal_balls(breaks: boolean[]): number {
    const jumpAmount = Math.floor(Math.sqrt(breaks.length));

    let i = jumpAmount;

    // Jump the jumpAmount until first ball breaks
    for (; i < breaks.length; i += jumpAmount) {
        if (breaks[i]) break;
    }

    // Set i back to one jumpAmount
    i -= jumpAmount;

    // Walk the last jumpAmount
    for (let j = 0; j < jumpAmount && i < breaks.length; j++, i++) {
        if (breaks[i]) {
            return i;
        }
    }
    return -1;
}

export default function dfs(head: BinaryNode<number>, needle: number): boolean {
    if (head === null) return false;
    if (head.value === needle) return true;

    if (needle < head.value && head.left) dfs(head.left, needle);
    if (needle > head.value && head.right) dfs(head.right, needle);

    return false;
}

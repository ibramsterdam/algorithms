type Node<T> = {
    value: T;
    next?: Node<T>;
};
export default class SinglyLinkedList<T> {
    public length: number;
    private tail?: Node<T>;
    private head?: Node<T>;

    constructor() {
        this.length = 0;
        this.head = undefined;
        this.tail = undefined;
    }

    prepend(item: T): void {
        const node = { value: item } as Node<T>;
        this.length++;

        if (!this.head) {
            this.head = this.tail = node;
            return;
        }
        node.next = this.head;
        this.head = node;
    }

    insertAt(item: T, idx: number): void {
        if (idx > this.length) {
            throw new Error("Invalid index");
        }

        if (idx === this.length) {
            this.append(item);
            return;
        } else if (idx === 0) {
            this.prepend(item);
            return;
        }

        const prev = this.getAt(idx - 1) as Node<T>;
        const node = { value: item, next: prev.next } as Node<T>;
        prev.next = node;
        this.length++;
    }

    append(item: T): void {
        this.length++;
        const node = { value: item } as Node<T>;

        if (!this.tail) {
            this.head = this.tail = node;
            return;
        }

        this.tail.next = node;
        this.tail = node;
    }

    remove(item: T): T | undefined {
        let curr = this.head;
        for (let i = 0; curr && i < this.length; ++i) {
            if (curr.value === item) {
                break;
            }

            curr = curr.next;
        }

        if (!curr) {
            return undefined;
        }

        return this.removeNode(curr);
    }

    get(idx: number): T | undefined {
        return this.getAt(idx)?.value;
    }

    removeAt(idx: number): T | undefined {
        const node = this.getAt(idx);

        if (!node) {
            return undefined;
        }

        return this.removeNode(node);
    }

    private removeNode(node: Node<T>): T | undefined {
        this.length--;

        if (this.length === 0) {
            const out = this.head?.value;
            this.head = this.tail = undefined;
            return out;
        }

        if (node === this.head) {
            this.head = node.next;
        }

        if (node === this.tail) {
            const prev = this.getAt(this.length - 1);
            if (prev) {
                prev.next = undefined;
                this.tail = prev;
            }
        } else {
            const prev = this.getPrevNode(node);
            if (prev) {
                prev.next = node.next;
            }
        }

        node.next = undefined;
        return node.value;
    }

    private getPrevNode(node: Node<T>): Node<T> | undefined {
        let curr = this.head;
        while (curr && curr.next !== node) {
            curr = curr.next;
        }
        return curr;
    }

    private getAt(idx: number): Node<T> | undefined {
        let curr = this.head;
        for (let i = 0; curr && i < idx; ++i) {
            curr = curr.next;
        }

        return curr;
    }
}

export default class Map<T extends string | number, V> {
    private data: { key: T; value: V }[];

    constructor() {
        this.data = [];
    }

    get(key: T): V | undefined {
        const entry = this.data.find((item) => item.key === key);
        return entry ? entry.value : undefined;
    }

    set(key: T, value: V): void {
        const entry = this.data.find((item) => item.key === key);
        if (entry) {
            entry.value = value;
        } else {
            this.data.push({ key, value });
        }
    }

    delete(key: T): V | undefined {
        const index = this.data.findIndex((item) => item.key === key);
        if (index !== -1) {
            const entry = this.data[index];
            this.data.splice(index, 1);
            return entry.value;
        }
        return undefined;
    }

    size(): number {
        return this.data.length;
    }
}

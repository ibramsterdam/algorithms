export default class ArrayList<T> {
    private data: T[];
    public length: number;

    constructor(initialCapacity: number = 10) {
        this.data = new Array<T>(initialCapacity);
        this.length = 0;
    }

    prepend(item: T): void {
        this.insertAt(item, 0);
    }

    insertAt(item: T, idx: number): void {
        if (idx < 0 || idx > this.length) {
            throw new Error("Invalid index");
        }

        if (this.length === this.data.length) {
            this.resize();
        }

        for (let i = this.length; i > idx; i--) {
            this.data[i] = this.data[i - 1];
        }

        this.data[idx] = item;
        this.length++;
    }

    append(item: T): void {
        if (this.length === this.data.length) {
            this.resize();
        }

        this.data[this.length] = item;
        this.length++;
    }

    remove(item: T): T | undefined {
        const index = this.data.findIndex((value) => value === item);
        if (index !== -1) {
            return this.removeAt(index);
        }
        return undefined;
    }

    get(idx: number): T | undefined {
        if (idx < 0 || idx >= this.length) {
            return undefined;
        }

        return this.data[idx];
    }

    removeAt(idx: number): T | undefined {
        if (idx < 0 || idx >= this.length) {
            return undefined;
        }

        const item = this.data[idx];
        for (let i = idx; i < this.length - 1; i++) {
            this.data[i] = this.data[i + 1];
        }

        this.length--;
        return item;
    }

    private resize(): void {
        const newCapacity = this.data.length * 2;
        const newData = new Array<T>(newCapacity);
        for (let i = 0; i < this.length; i++) {
            newData[i] = this.data[i];
        }
        this.data = newData;
    }
}

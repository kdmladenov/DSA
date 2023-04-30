class List {
    #items = []

    add(item) {
        this.#items.push(item);
    }

    get(index) {
        this.#checkRange(index);

        return this.#items[index];
    }

    set(index, item) {
        this.#checkRange(index);

        return this.#items[index] = item;
    }

    insert(index, item) {
        this.#checkRange(index);

        this.#items.splice(index, 0, item);
    }

    remove(index) {
        this.#checkRange(index);

        this.#items.splice(index, 1);
    }

    size() {
        return this.#items.length;
    }

    values() {
        return [...this.#items];
    }

    #checkRange(index) {
        if (typeof index !== 'number' || index < 0 || index >= this.#items.length) {
            throw new Error(`Index ${index} out of range`);
        }
    }
}
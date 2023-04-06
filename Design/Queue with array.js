class Queue {
    #items = [];

    enqueue(val) {
        this.#items.push(val);
    }

    dequeue() {
        if (this.isEmpty()) {
            throw new Error('Queue is empty');
        }

        // WARNING: this is functionally correct, but has O(n) complexity, which is not optimal for dequeue
        return this.#items.shift();
    }

    peek() {
        if (this.isEmpty()) {
            throw new Error('Queue is empty');
        }

        return this.#items[0];
    }

    isEmpty() {
        return this.#items.length === 0;
    }
}

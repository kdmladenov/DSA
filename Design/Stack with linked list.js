import ListNode from '../Linked Lists/list-node.js';


class Stack {
    #top = null;

    push(value) {
        const node = new ListNode(value);
        node.next = this.#top;
        this.#top = node;
    }

    pop() {
        if (!this.#top) {
            throw new Error('stack is empty');
        }

        const val = this.#top.value;
        this.#top = this.#top.next;

        return val;
    }

    peek() {
        if (!this.#top) {
            throw new Error('stack is empty');
        }

        return this.#top.value;
    }

    isEmpty() {
        return !this.#top;
    }
}


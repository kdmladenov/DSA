import ListNode from '../Linked Lists/list-node.js'

class Queue {
    #head = null;
    #tail = null;

    enqueue(val) {
        const newNode = new ListNode(val, null);
        if (!this.#head) {
            this.#head = newNode;
        } else {
            this.#tail.next = newNode;
        }

        this.#tail = newNode;
    }

    dequeue() {
        if (!this.#head) {
            throw new Error('Queue is empty')
        }

        const val = this.#head.value;
        this.#head = this.#head.next;

        return val;
    }

    peek() {
        if (!this.#head) {
            throw new Error('Queue is empty')
        }

        return this.#head.value;
    }

    isEmpty() {
        return !this.#head;
    }
}

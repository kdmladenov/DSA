import ListNode from './list-node.js'

class LinkedList {
    #head = null;

    addFirst(value) {
        const node = new ListNode(value);
        node.next = this.#head;
        this.#head = node;
    }

    removeFirst() {
        if (this.#head === null) {
            throw new Error('List is empty'); 
        }

        const val = this.#head.value;
        this.#head = this.#head.next;

        return val
    }

    insertAfter(node, value) {
        const newNode = new ListNode(value);
        newNode.next = node.next;
        node.next = newNode;
    }

    removeAfter(node) {
        if (node.next) {
            node.next = node.next.next;
        }
    }

    find(value) {
        let ref = this.#head;
        while (ref) {
            if (value === ref.value) {
                return ref;
            }
            ref = ref.next;
        }

        return null;
    }

    *[Symbol.iterator]() {
        let current = this.#head;
        while (current) {
            yield current.value;
            current = current.next;
        }
    }
}
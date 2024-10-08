class LinkedList {
    constructor() {
        this.root = null;
        this.size = 0;
    }

    add(value) {
        if (!this.size) {
            this.root = new Node(value);
            this.size++;
        }

        let node = this.root;
        while (node.next) {
            node = node.next;
        }
        
        node.next = new Node(value);
        this.size++;

        return this;
    }

    getSize() {
        return this.size;
    }

    print() {
        let result = [];
        let node = this.root;
        while (node) {
            result.push(node.value);
            node = node.next;
        }
        console.log(result);
    }
}

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

const list = new LinkedList();
list.add(5);
list.add(3);
list.add(2);
list.add(5);
list.add(7);

list.print();

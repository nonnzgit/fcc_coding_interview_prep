class CircularQueue {
  constructor(size) {
    this.queue = [];
    this.read = 0;
    this.write = 0;
    this.max = size - 1;

    while (size > 0) {
      this.queue.push(null);
      size--;
    }
  }

  print() {
    return this.queue;
  }

  enqueue(item) {
    // Only change code below this line
    if (this.queue[this.write] === null) {
      this.queue.splice(this.write, 1, item);
      if (this.write === this.max) {
        this.write = 0;
      } else {
        this.write++;
      }
      return item;
    }
    return null;

    // Only change code above this line
  }

  dequeue() {
    // Only change code below this line
    if (this.queue[this.read] !== null) {
      const extracted = this.queue[this.read];
      this.queue.splice(this.read, 1, null);
      if (this.read === this.max) {
        this.read = 0;
      } else {
        this.read++;
      }
      return extracted;
    }
    return null;
  }

  // Only change code above this line
}

const cq = new CircularQueue(5);
cq.enqueue('a');
cq.enqueue('b');
cq.enqueue('c');
cq.enqueue('d');
cq.enqueue('e');
console.log(cq.print());
cq.enqueue('f');
console.log(cq.print());
cq.dequeue();
cq.enqueue('f');
console.log(cq.print());
cq.dequeue();
cq.dequeue();
cq.dequeue();
console.log(cq.print());

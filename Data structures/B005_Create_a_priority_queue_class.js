function PriorityQueue() {
  this.collection = [];
  this.printCollection = function () {
    console.log(this.collection);
  };
  // Only change code below this line
  this.enqueue = function ([elem, priority]) {
    if (this.collection.length === 0) {
      this.collection.push([elem, priority]);
    } else {
      let i = this.collection.length - 1;

      while (i >= 1 && priority < this.collection[i][1]) {
        i--;
      }

      if (i === 0 && priority < this.collection[i][1]) {
        this.collection.splice(i, 0, [elem, priority]);
      } else {
        this.collection.splice(i + 1, 0, [elem, priority]);
      }
    }
  };
  this.dequeue = function () {
    const elem = this.collection.shift();
    return elem[0];
  };
  this.front = function () {
    return this.collection[0][0];
  };
  this.size = function () {
    return this.collection.length;
  };
  this.isEmpty = function () {
    return this.collection.length === 0 ? true : false;
  };
  // Only change code above this line
}

const pq = new PriorityQueue();

pq.enqueue(['human', 4]);
pq.enqueue(['ufo', 3]);
pq.enqueue(['rabbit', 5]);
pq.enqueue(['ufo2', 3]);
pq.enqueue(['ufo3', 3]);
pq.enqueue(['animal', 1]);
pq.printCollection();

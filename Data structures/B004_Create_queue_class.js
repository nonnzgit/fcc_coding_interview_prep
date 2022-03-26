function Queue() {
  var collection = [];
  this.print = function () {
    console.log(collection);
  };
  // Only change code below this line
  this.enqueue = function (elem) {
    collection.push(elem);
  };
  this.dequeue = function () {
    return collection.shift();
  };
  this.front = function () {
    return collection[0];
  };
  this.size = function () {
    return collection.length;
  };
  this.isEmpty = function () {
    return collection.length === 0 ? true : false;
  };
  // Only change code above this line
}

const cola = new Queue();

cola.enqueue('Hola');
cola.enqueue('Que tal?');
cola.enqueue('Adios');
cola.print();
cola.dequeue();
cola.print();
console.log(cola.front());
console.log(cola.isEmpty());

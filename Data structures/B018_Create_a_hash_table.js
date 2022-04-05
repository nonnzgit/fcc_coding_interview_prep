var called = 0;
var hash = string => {
  called++;
  var hashed = 0;
  for (var i = 0; i < string.length; i++) {
    hashed += string.charCodeAt(i);
  }
  return hashed;
};
var HashTable = function () {
  this.collection = {};
  // Only change code below this line
  this.add = function (key, value) {
    if (!this.collection[hash(key)]) {
      this.collection[hash(key)] = {};
    }
    this.collection[hash(key)][key] = value;
  };

  this.lookup = function (key) {
    return this.collection[hash(key)][key];
  };

  this.remove = function (key) {
    delete this.collection[hash(key)][key];
    if (!Object.keys(this.collection[hash(key)]).length)
      delete this.collection[hash(key)];
  };
  // Only change code above this line
};

const ht = new HashTable();

// Comprobar si gestiona bien la colisión.
ht.add('hola', 'adios1');
ht.add('hola', 'adios2');
console.log(ht.lookup('hola'));

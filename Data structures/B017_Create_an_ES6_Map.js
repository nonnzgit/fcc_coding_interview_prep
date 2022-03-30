const myMap = new Map();
console.log(myMap);

// LIST OF METHODS
// .has(key) returns true or false based on the presence of a key
// .get(key) returns the value associated with a key
// .set(key, value) sets a new key, value pair
// .delete(key) removes a key, value pair
// .clear() removes all key, value pairs
// .entries() returns an array of all the keys in insertion order
// .keys() returns an array of all the keys.
// .values() returns an array of all the values in insertion order

// Set
myMap.set('freeCodeCamp', 'Awesome!');
myMap.set('This is', 'a map');
myMap.set('hola', 'adios');
console.log('añadidos 3: ', myMap);
// Has
console.log('tiene un valor determinado: ', myMap.has('freeCodeCamp'));
// Get
console.log('dame un valor determinado: ', myMap.get('freeCodeCamp'));
// Entries
console.log('entries: ', myMap.entries());
// Values
console.log('values: ', myMap.values());
// Keys
console.log('keys: ', myMap.keys());
// Delete
myMap.delete('freeCodeCamp');
console.log('after delete: ', myMap);
// Clear
myMap.clear();
console.log('cleared: ', myMap);

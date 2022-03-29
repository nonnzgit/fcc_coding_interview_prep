class Set {
  constructor() {
    // This will hold the set
    this.dictionary = {};
    this.length = 0;
  }
  // This method will check for the presence of an element and return true or false
  has(element) {
    return this.dictionary[element] !== undefined;
  }
  // This method will return all the values in the set
  values() {
    return Object.keys(this.dictionary);
  }
  // This method will add an element to the set
  add(element) {
    if (!this.has(element)) {
      this.dictionary[element] = true;
      this.length++;
      return true;
    }

    return false;
  }
  // This method will remove an element from a set
  remove(element) {
    if (this.has(element)) {
      delete this.dictionary[element];
      this.length--;
      return true;
    }

    return false;
  }
  // This method will return the size of the set
  size() {
    return this.length;
  }
  // This is our union method
  union(set) {
    const newSet = new Set();
    this.values().forEach(value => {
      newSet.add(value);
    });
    set.values().forEach(value => {
      newSet.add(value);
    });

    return newSet;
  }
  // Only change code below this line
  intersection(set) {
    const unionSet = this.union(set);
    const resultSet = new Set();
    unionSet.values().forEach(value => {
      if (this.has(value) && set.has(value)) {
        resultSet.add(value);
      }
    });
    return resultSet;
  }
  // Only change code above this line
}

const set = new Set();
set.add(1);
set.add(4);
set.add(2);
set.add(6);
const set2 = new Set();
set2.add(1);
set2.add(3);
set2.add(4);
set2.add(7);
console.log(set.intersection(set2));

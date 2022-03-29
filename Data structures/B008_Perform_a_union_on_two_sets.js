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
    return Object.values(this.dictionary);
  }
  // This method will add an element to the set
  add(element) {
    if (!this.has(element)) {
      this.dictionary[element] = element;
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
  // Only change code below this line
  union(set) {
    const unionSet = new Set();
    for (let element of this.values()) {
      unionSet.add(element);
    }
    for (let element of set.values()) {
      unionSet.add(element);
    }
    return unionSet;
  }
  // Only change code above this line
}

const set = new Set();
set.add(1);
set.add(2);
set.add(2);
const set2 = new Set();
set2.add(3);
set2.add(3);
set2.add(4);
set.union(set2);
console.log(set.union(set2));

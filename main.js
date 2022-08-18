function makeObjectDeepCopy(obj) {
  const clone = {};

  if(typeof obj !== 'object' || obj === null) {
    return 'It s a primitive!';
  }

  for (let prop in obj) {
    if(typeof obj[prop] == 'object') {
      clone[prop] = makeObjectDeepCopy(obj[prop]);
    } else {
      clone[prop] = obj[prop];
    }
  }

  return clone;
}

const car = {
  color: "red",
  wheels: 4,
  engine: {
    cylinders: 4,
    size: 2.2
  }
};

const newClone = makeObjectDeepCopy(car);

// =================================================

const array = [-2, -15, 0, 4];

function selectFromInterval(array, val1, val2) {
  const result = [];
  const validValueRule = !val1 && !val2 || typeof val1 !== 'number' && typeof val1 !== 'number';

  if (validValueRule) {
    throw new Error("Not a valid value!");
  }
  if (Array.isArray(array)) {

    for (let i = 0; i < array.length; i++) {
      if (typeof array[i] !== 'number') {
        throw new Error("Array consists not a number!");
      } 
      if (val1 < val2 && array[i] >= val1 && array[i] <= val2) {
        result.push(array[i]);
      }
      if (val1 > val2 && array[i] >= val2 && array[i] <= val1) {
        result.push(array[i]);
      }
    }

  } else {
    throw new Error("Not an array!");
  }

  return result;
}

const newInterval = selectFromInterval(array, -13, -5);

// =================================================

const myIterable = {
  [Symbol.iterator]() {
    return {
      from: 1,
      to: 4,
      next() {
        if (!this.from || !this.to) {
          throw new Error("Not a true value!");
        }
        if (typeof this.from !== "number" || typeof this.to !== "number") {
          throw new Error("Not a number!");
        }
        if (this.from <= this.to) {
          return { value: this.from++, done: false };
        } 

        return { done: true };
      },
    };
  },
};

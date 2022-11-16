import {
  ForestBeast,
  HairedForestBeast,
  HairedForestBeastWithFamily,
} from "./codebase";
/**
 * @param instance class instance to serialize
 * @returns plain object
 */
export default function serializeClassInstance(instance) {
  instance;
  Object.defineProperties(ForestBeast.prototype, {
    countOfLimbs: {
      enumerable: true,
    },
    geneticData: {
      enumerable: true,
    },
    id: {
      enumerable: true,
    },
    hasHair: {
      enumerable: true,
    },
    name: {
      enumerable: true,
    },
  });
  Object.defineProperties(HairedForestBeast.prototype, {
    hasHair: {
      enumerable: true,
    },
    name: {
      enumerable: true,
    },
    isSocial: {
      enumerable: true,
    },
  });
  Object.defineProperties(HairedForestBeastWithFamily.prototype, {
    family: {
      enumerable: true,
    },
  });

  const serializeRecursion = (obj) => {
    const arr = [];
    const clone = {};
    for (let prop in obj) {
      if (prop.startsWith("_")) {
        continue;
      } else if (obj[prop] === undefined) {
        continue;
      } else if (Array.isArray(obj[prop])) {
        for (let fam of obj[prop]) {
          arr.push(serializeRecursion(fam));
          clone[prop] = arr;
        }
      } else {
        clone[prop] = obj[prop];
      }
    }
    return clone;
  };
  const res = serializeRecursion(instance);
  return res;
}

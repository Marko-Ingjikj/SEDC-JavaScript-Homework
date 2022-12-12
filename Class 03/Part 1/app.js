function findTypeOf(a) {
  let result = typeof a;
  console.log(typeof a);
  return result;
}

let typeOfObject = findTypeOf(null);

let typeOfBoolean = findTypeOf(false);

let typeOfNumber = findTypeOf(30);

let typeOfString = findTypeOf("SEDC");

let typeOfUndefined = findTypeOf();

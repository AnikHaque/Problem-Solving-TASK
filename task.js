function compare_lname(a, b) {
  if (a.age < b.age) {
    return -1;
  }
  if (a.age > b.age) {
    return 1;
  }
  return 0;
}

const vaxTrail = (arr) => {
  const booth = {};

  const aCat = arr.filter(
    (val) => val.age >= 20 && val.age <= 30 && val.temperature < 100
  );
  if (aCat.length > 0) {
    booth.A = aCat.sort((a, b) => (a.age > b.age ? 1 : -1));
  }
  const bCat = arr.filter(
    (val) => val.age >= 31 && val.age <= 40 && val.temperature < 100
  );
  if (bCat.length > 0) {
    booth.B = bCat.sort((a, b) => (a.age > b.age ? 1 : -1));
  }
  const cCat = arr.filter(
    (val) => val.age >= 41 && val.age <= 50 && val.temperature < 100
  );
  if (cCat.length > 0) {
    booth.C = cCat.sort((a, b) => (a.age > b.age ? 1 : -1));
  }
  const dCat = arr.filter((val) => val.temperature >= 100);
  if (dCat.length > 0) {
    booth.D = dCat.sort((a, b) => (a.age > b.age ? 1 : -1));
  }

  return booth;
};

const result = vaxTrail([
  { name: "jashim Bhai", age: 28, temperature: 98 },
  { name: "Well dev", age: 38, temperature: 98 },
  { name: "Well dev", age: 48, temperature: 98 },
  { name: "HOJOJO", age: 28, temperature: 102 },
  { name: "LOL", age: 23, temperature: 98 },
]);
console.log(result);

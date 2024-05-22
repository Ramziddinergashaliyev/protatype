let arr = [11, 12, 3, 2, 9, 22];

//For Each
Array.prototype.ProtaForEach = function (callback) {
  let newDate = this;
  for (let i = 0; i < newDate.length; i++) {
    callback(newDate[i], i, newDate);
  }
};

console.log(arr.ProtaForEach((el, ind) => {}));

//Filter
Array.prototype.ProtaFilter = function (callback) {
  const res = [];
  let newDate = this;
  for (let i = 0; i < newDate.length; i++) {
    if (callback(newDate[i], i, newDate)) {
      res.push(newDate[i]);
    }
  }
  return res;
};

console.log(arr.ProtaFilter((number) => number % 2 !== 0));

//Some
Array.prototype.ProtaSome = function (callback) {
  let newDate = this;
  for (let i = 0; i < newDate.length; i++) {
    if (callback(newDate[i], i, newDate)) {
      return true;
    }
  }
  return false;
};

console.log(arr.ProtaSome((number) => number % 2 === 0));

//Every
Array.prototype.ProtaEvery = function (callback) {
  let newDate = this;
  for (let i = 0; i < newDate.length; i++) {
    if (!callback(newDate[i], i, newDate)) {
      return false;
    }
  }
  return true;
};

console.log(arr.ProtaEvery((number) => number % 2 === 0));

//Find
Array.prototype.ProtaFind = function (callback) {
  let newDate = this;
  for (let i = 0; i < newDate.length; i++) {
    if (callback(newDate[i], i, newDate)) {
      return newDate[i];
    }
  }
};

console.log(arr.ProtaFind((number) => number > 8));

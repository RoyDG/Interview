let multiply = function (x, y) {
  console.log(x * y);
};

let multiplyTwo = multiply.bind(this, 2);
multiplyTwo(5);

let multiplyThree = multiply.bind(this, 2, 3); //in this it ignore 8
multiplyThree(8);

let multiplyFour = multiply.bind();
multiplyFour(5, 3);

let multiply2 = function (x) {
  return function (y) {
    console.log(x * y);
  };
};

let multiply3 = multiply2(2);
multiply3(3);

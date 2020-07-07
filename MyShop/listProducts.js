var faker = require('faker');

console.log("==============");
console.log("My Shop");
console.log("==============");
for (var i = 0; i < 10; i++) {
  var productName = faker.commerce.product();
  var productPrice = faker.commerce.price();
  console.log(productName + " - $" + productPrice);
}


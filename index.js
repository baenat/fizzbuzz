const fizzbuzz = require('./fiizzbuzz/fizzbuzz');

function print(num) {

  for (let i = 0; i < num; i++) {
    console.log(`${i} => ${fizzbuzz(i)}`);
  }

}


print(16);
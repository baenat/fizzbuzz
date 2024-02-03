require('dotenv').config();
const fizzbuzz = require('./fiizzbuzz/fizzbuzz');
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/:num', (req, res) => {

  const { num } = req.params;
  const data = print(num);

  res.send({ result: data });
})

app.listen(port, () => {
  console.log(`http://localhost:${port}`);
})


function print(num) {

  if (isNaN(num)) {
    return 'Error: the argument must be a number';
  }

  let data = {};
  for (let i = 1; i <= num; i++) {
    data[i] = fizzbuzz(i);
  }

  return data;
}
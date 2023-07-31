const express = require('express')
const expressLayouts = require('express-ejs-layouts')
const path = require('path')

const app = express()

app.use(express.static('public'))
app.use(expressLayouts)
app.set('layout', './layouts/master')
app.set('view engine', 'ejs')

app.get('/', function (req, res) {
  res.render('pages/index')
})

app.get('/ben', function (req, res) {
  res.send('ben')
})

app.get('/about', function (req, res) {
  res.render('pages/about', {
    people: [
      {
        name: 'Lee',
      },
      {
        name: 'John',
      },
    ],
  })
})

app.get('/login', function (req, res) {
  res.render('pages/login', {
    layout: './layouts/authentication',
  })
})

<<<<<<< HEAD
app.get("/dashboard", function (req, res) {
  res.render("pages/dashboard", {
    layout: "./layouts/authentication",
  });
});

app.listen(3000);
console.log("Server is running");
=======
app.listen(3000)
console.log('Server is running')
>>>>>>> 470512d1f54ab1b0f4b1891926948fdccc6f8f28

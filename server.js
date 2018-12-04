var express = require('express');
var app = express();

app.set('view engine', 'pug');
app.set('views','./views');

app.get('/login_temp', function(req, res) {
  res.render('login_temp', {
      name: "Aplikacja do logowania się przez Google",
      url: "/auth/google"
  });
})

app.get('/auth/google', function(req, res) {
  res.send("Logowanie poprawne");
  console.log('Login completed');
})


app.listen(3000);
app.use(function (req, res, next) {
    res.status(404).send('Wybacz, nie mogliśmy odnaleźć tego, czego żądasz!');
    next();
  });

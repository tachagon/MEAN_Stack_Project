exports.render = function (req, res) {
  var isLoggedIn = false;

  // req.session ชื่อ session คือชื่อที่เราตั้งค่าไว้ใน config/express.js
  if (typeof req.session.remember !== 'undefined') {
    isLoggedIn = req.session.remember;
  }

  res.render('index', {
    'title': 'Hello World',
    isLoggedIn: isLoggedIn
  });
};

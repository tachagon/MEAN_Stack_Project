exports.login = function (req, res) {
  //
  // ดูวิธี validation เพิ่มได้ที่ github.com/chriso/validator.js
  //
  req.checkBody('email', 'Invalid Email').notEmpty().isEmail();
  // ทำความสะอาดข้อมูล เช่น ทำให้อีเมลเป็นตัวอักษรเล็กหมด
  req.sanitizeBoby('email').normalizeEmail();
  var errors = req.validationErrors();
  if (errors) {
    res.render('index', {
      // stringify ใช้แปลงจาก Json เป็น String
      title: 'There have been validation errors: ' + JSON.stringify(errors),
      isLoggedIn: false
    });
    return;
  }

  console.log(req.body);
  console.log('Email: ' + req.body.email);
  console.log('Password: ' + req.body.password);

  res.render('index', {
    title: 'Logged in as ' + req.body.email,
    isLoggedIn: true
  });
}

exports.logout = function (req, res) {
  res.render('index', {
    title: 'See you again later',
    isLoggedIn: false
  });
}

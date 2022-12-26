function saveUser(email, password) {
  const user = {
    id: Math.random().toString(),
    email: email,
    password: password,
  };

  db.insert("users", user); // will not run
}

function saveUser(user) {
  db.insert("users", user); // outsource certain functionality to different function
}

const user = new User("test@adsfsaf", "testers");
user.save(); // create class and then method to save user (this would be the cleanest option)
// note -- do not really need to refactor two argument function if order (of parameters) makes sense
// clean code is about writing readable and meaningful code
// should always question code and see if can improve
// note what output parameters are (not good and should avoid if possible)

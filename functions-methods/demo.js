// function createUser(email, password) {
//   if (!email || !email.includes("@") || !password || password.trim === "") {
//     console.log("invalid input");
//     return;
//   }

//   const user = {
//     email,
//     password,
//   };

//   database.insert(user);
// }

function invalidEmail(email) {
  return !email || !email.includes("@");
}

function invalidPassword(password) {
  return !password || password.trim() === "";
}

function saveUser(email, password) {
  const user = {
    email,
    password,
  };

  database.insert(user);
}

function validateInput(email, password) {
  if (invalidEmail(email) || invalidPassword(password)) {
    throw new Error("Invalid Input");
  }
}

function createUser(email, password) {
  validateInput(email, password);
  saveUser(email, password);
}

createUser("", "dafdwer");

// before splitting need to consider if we are improving readability

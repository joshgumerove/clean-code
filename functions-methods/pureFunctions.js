const { startSession } = require("mongoose");

function generateId(userName) {
  const id = `id_${userName}`;
  return id;
} // pure function: will always get back same result with given input

console.log(generateId("jgumerove"));

function nonPureId(userName) {
  const id = userName + Math.random().toString();
  return id;
} // non-pure function (not always bad)

// pure functions -- should not have side-effects

function createUser(email, password) {
  const user = new User(email, password);
  startSession(user); // this would be a side-effect (operation which does not just act on function inputs and change the function output)
  return user;
}

// depending on the program -- may need a lot of side effects (but side effects should be expected)

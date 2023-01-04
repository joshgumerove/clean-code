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

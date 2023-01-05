function connectDatabase() {
  const didConnect = database.connect(); // side-effect (expected)
  if (didConnect) {
    return true;
  } else {
    console.log("Could not connect to database!"); // side-effect (maybe expected)
    return false;
  }
}

function determineSupportAgent(ticket) {
  if (ticket.requestType === "unknown") {
    return findStandardAgent(); // probably not a side-effect
  }
  return findAgentByRequestType(ticket.requestType); // probably not a side-effect
}

function isValid(email, password) {
  if (!email.includes("@") || password.length < 7) {
    console.log("Invalid input!"); //side-effect (unexpected)
    return false;
  }
  return true;
}

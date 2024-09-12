function sendNotification(email) {
  if (!email.includes("@")) {
    return "Invalid Email";
  }
  let [username, domain] = email.split("@");

  return username + " sent you an email from " + domain;
}
console.log(sendNotification("imtiazgmail.com"));

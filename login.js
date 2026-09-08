// Handles user login

function validateLogin(username, password) {
  if (username === "") {
    return { ok: false, error: "Username required" };
  }
  if (password.length < 6) {
    return { ok: false, error: "Password too short" };
  }
  return { ok: true };
}

module.exports = { validateLogin };

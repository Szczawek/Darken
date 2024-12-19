
async function createAnAccount(req, res) {
  const { nick, email, password, unqiueName } = req.body;
  const value = [nick, email, password, unqiueName, new Date()];
  const command =
    "INSERT INTO  users(nick,email,password,unqiueName,date_of_creation) VALUES(?,?,?,?,?)";
}

const bcrypt = require('bcrypt');
const saltRounds = 12;

module.exports = {
  async login(req, res) {
    const db = req.app.get('db');
    const { username, password } = req.body;
    const [existingUser] = await db.users.get_user_by_username(username);
    if (!existingUser) return res.status(401).send('Username not found');
    const result = await bcrypt.compare(password, existingUser.password);
    if (result) {
      req.session.user = {
        username: existingUser.username,
        id: existingUser.id,
        loggedIn: true
      };
      res.send(req.session.user);
    } else res.status(401).send('Username or password incorrect');
  },
  async signup(req, res) {
    const db = req.app.get('db');
    const { username, password } = req.body;
    const [existingUser] = await db.users.get_user_by_username(username);
    if (existingUser) return res.status(400).send('Username exists already');
    const salt = await bcrypt.genSalt(saltRounds);
    const hash = await bcrypt.hash(password, salt);
    const [user] = await db.users.create_user([username, hash]);
    req.session.user = { username: user.username, id: user.id, loggedIn: true };
    res.send(req.session.user);
  },
  logout(req, res) {
    req.session.destroy();
    res.sendStatus(200);
  }
};

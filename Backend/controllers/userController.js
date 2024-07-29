const client = require("../db");
const bcrypt = require("bcrypt");
const passport = require("passport");

async function find() {
  const a = 2;
}

class UserController {
  async findOneById(id) {
    try {
      const text = "SELECT * FROM users WHERE id = $1";
      const user = await client.query(text, [id]);
      if (!user.rows[0]) {
        throw new Error("Пользователь с таким id не существует");
      }
      return user.rows[0];
    } catch (err) {
      return err;
    }
  }

  async findOneByUsername(username) {
    try {
      console.log("SSASDASD");
      const text = "SELECT * FROM users WHERE login = $1";
      const user = await client.query(text, [username]);

      if (!user.rows[0]) {
        return null;
      }
      return user.rows[0];
    } catch (err) {
      return err;
    }
  }

  registration = async (req, res) => {
    try {
      const { username, password, name } = req.body;

      const user = await this.findOneByUsername(username);
      console.log(user);
      if (user) {
        throw new Error("Пользователь с таким именем уже существует");
      }
      const textQuery2 =
        "INSERT INTO users(login, password, name) VALUES($1, $2, $3) RETURNING *";
      const hashPassword = await bcrypt.hash(password, 6);
      const result = await client.query(textQuery2, [
        username,
        hashPassword,
        name,
      ]);
      if (!result.rows[0]) {
        throw new Error("Ошибка при создании аккаунта");
      }
      return res.json({ id: result.rows[0].id });
    } catch (e) {
      return res.json({ error: e.message });
    }
  };

  changePassword = async (req, res) => {
    try {
      const { username, password, newPassword } = req.body;
      console.log(username);
      const user = await this.findOneByUsername(username);
      // console.log(result.rows[0].password)
      console.log(user);
      if (!user) {
        throw new Error("Пользователь с таким именем не существует");
      }
      if (!bcrypt.compareSync(password, user.password)) {
        throw new Error("Пароли не совпадают");
      }
      const updateQuery =
        "UPDATE users SET password = $1 WHERE id = $2 RETURNING *";
      const hashPassword = await bcrypt.hash(newPassword, 6);
      const result = await client.query(updateQuery, [hashPassword, user.id]);
      if (!result.rows[0]) {
        throw new Error("Ошибка при обновлении пароля аккаунта");
      }
      return res.json({ id: result.rows[0].id });
    } catch (e) {
      return res.json({ error: e.message });
    }
  };

  async authStatus(request, response, next) {
    console.log(`Status: ` + JSON.stringify(request.user));
    console.log(JSON.stringify(request.session));
    return request.user ? next() : response.sendStatus(401);
  }

  async getAuthStatus(request, response) {
    console.log(`Status: ` + JSON.stringify(request.user));
    console.log(JSON.stringify(request.session));
    try {
      return request.user
        ? response.json({ userId: request.user.id, name: request.user.name })
        : response.sendStatus(401);
    } catch (err) {
      return res.json({ error: err.message });
    }
  }

  async check(username, password) {
    try {
      const user = await this.findOneByUsername(username);
      console.log(user);
      if (!bcrypt.compareSync(password, user.password)) {
        throw new Error("Пароли не совпадают");
      }
      return user;
    } catch (err) {
      return err;
    }
  }
}

module.exports = new UserController();

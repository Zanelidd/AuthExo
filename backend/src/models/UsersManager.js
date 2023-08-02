const AbstractManager = require("./AbstractManager");

class UsersManager extends AbstractManager {
  constructor() {
    super({ table: "users" });
  }

  insert(user) {
    return this.database.query(
      `INSERT INTO ${this.table} (username,email,password_hash,salt) VALUES(?,?,?,?)`,
      [user.username, user.email, user.hpassword, user.salt]
    );
  }

  selectByEmail(email) {
    return this.database.query(
      `SELECT id,username,email,password_hash,salt from ${this.table}  WHERE email = ? `,
      [email]
    );
  }
}

module.exports = UsersManager;

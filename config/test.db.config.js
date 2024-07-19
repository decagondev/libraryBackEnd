const sequelize = require('./db.config.js');

console.log(sequelize);

(async () => {
  try {
    await sequelize.sync();
    console.log("Database created!");
  } catch (error) {
    console.error("Could not create Database!");
  } finally {
    await sequelize.close();
  }
})();

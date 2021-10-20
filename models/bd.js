const Sequelize = require('sequelize');

//conexcao com o bandco de dados (não mexe nisso)//
const sequelize = new Sequelize('postapp', 'root', '2254aabb',{
  host: "localhost",
  dialect: 'mysql',
});

module.exports = {

  Sequelize: Sequelize,
  sequelize: sequelize

}

const bd = require('./bd.js')

const Post = bd.sequelize.define('postagens',{
  titulo: {
    type: bd.Sequelize.STRING
  },
  conteudo: {
    type: bd.Sequelize.TEXT
  }
})

//Post.sync({force: true})//

module.exports = Post;

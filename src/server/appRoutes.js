module.exports = function(app) {
    var userdb= require('./controller');
  
    // db Routes
    app.route('/db')
      .get(userdb.user);
    
      };
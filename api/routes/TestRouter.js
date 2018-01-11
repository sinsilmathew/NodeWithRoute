// const router = function(app){
//   const userList = require('../controllers/TestController');
//   app.route('/users').get(userList.list_all_users);
//   }  
// module.exports = router;

module.exports = function(app) {
    var User_Actions = require('../controllers/TestController');
  
    // todoList Routes
    app.route('/users')
      .get(User_Actions.list_all_users)
      .post(User_Actions.create_user);
  
  
    // app.route('/tasks/:taskId')
    //   .get(todoList.read_a_task)
    //   .put(todoList.update_a_task)
    //   .delete(todoList.delete_a_task);
  };
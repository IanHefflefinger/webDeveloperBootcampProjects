window.setTimeout(function() {


  // array for todod
  var todos = [];
  // prompt user for input
  var input = prompt("Enter a command");

  while (input !== "quit") {
    // handle input 
    if (input === "list") {
      // list all todos
      console.log(todos);
    } else if (input === "new") {
      // prompt for new todo
      var newTodo = prompt("Add new todo");
      // add new todo to todos array
      todos.push(newTodo);
    }
    // ask for input again
    var input = prompt("Enter a command");
  }
  // indicate the app has been closed in the console
  console.log("App has been closed");

}, 500);




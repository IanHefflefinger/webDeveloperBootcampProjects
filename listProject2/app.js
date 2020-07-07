window.setTimeout(function() {


  // array for todod
  var todos = [];
  // prompt user for input
  var input = prompt("Enter a command");

  while (input !== "quit") {
    // handle input 
    if (input === "list") {
      // list all todos
      listTodos();
    } else if (input === "new") {
      // add todo
      addTodo();
    } else if (input === "delete") {
      // delete todo
      deleteTodo();
    }
    // ask for input again
    var input = prompt("Enter a command");
  }
  // indicate the app has been closed in the console
  console.log("App has been closed");


  // define functions:

  // list all todos
  function listTodos() {
    console.log("**********")
    todos.forEach(function(todo, i) {
      console.log(i + ": " + todo);
    })
    console.log("**********")
  }

  // add todo
  function addTodo() {
    // prompt for new todo
    var newTodo = prompt("Add new todo");
    // add new todo to todos array
    todos.push(newTodo);
    console.log("Added todo");
  }

  // delete todo
  function deleteTodo() {
    // ask for index of todo to be deleted
    var todoToDelete = prompt("Enter index of todo you want to delete");
    // delete that todo
    todos.splice(todoToDelete, 1);
    console.log("Deleted todo");
  }

}, 500);




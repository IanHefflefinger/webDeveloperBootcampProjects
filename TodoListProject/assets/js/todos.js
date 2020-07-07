// gray and line-through todos (check them off)
$("ul").on("click", "li", function(){
  $(this).toggleClass("completed");
});

// click on plus to reveal text input
$(".fa-plus").click(function(){
  $("input[type=text]").fadeToggle();
});

// click on x to delete todo
$("ul").on("click", "span", function(event){
  $(this).parent().fadeOut(500, function(){
    $(this).remove();
  });
  // event.stopPropogation();
});

// type out create new todo when user clicks enter button
$("input[type=text]").keypress(function(event){
  if (event.which === 13) {
    // extract value from input
    var newItemText = $(this).val();
    // clear input field
    $(this).val("");
    // create new item on list
    $("ul").append("<li><span><i class='fas fa-trash-alt'></i></span> " + newItemText + "</li>");
  }
});
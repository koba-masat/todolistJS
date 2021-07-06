let $ = window.jQuery;
$("#input-todo-button").click(function(){
    $('#todolist').append('<li>'+$("#input-todo").val()+'</li>');
});
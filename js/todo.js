let $ = window.jQuery;

class TodoList {
    constructor(){}

    static getDateTime(){
        let now = new Date();
        return now.getFullYear() + "年" 
            + (now.getMonth() +1) + "月"
            + now.getDate() + "日"
            + now.getHours() + "時"
            + now.getMinutes() + "分"
            + now.getSeconds() + "秒";
    };
    
    static getTodoVal(rowNum){
        return  '<li data-row="'+ rowNum + '">'+
                    '<span class="todo">' + $("#input-todo").val() + '</span>' +
                    '<span class="date-time">' + this.getDateTime() + '</span>' +
                    '<input type="text" class="datepicker" id="datepicker" placeholder="終了日">' +
                    '<button id="del-todo">削除</button>'+
                    '<br><input type="file" name="edit_image" id="edit_image" class="img_upload">' +
                    '<img src="" id="tl_img" class="img_preview">' +
                '</li>';
    };
    
    static addDatePicker(row){
        $("#todolist li:last-of-type input.datepicker").attr("id", "todo"+row);
        $("#todo"+row).removeClass("hasDatepicker").off("focusin").on("focusin", function(e) {
            $(this).datepicker();
        });
        $(".datepicker").datepicker({
            showOn: 'both',
            buttonText: "<i class='fas fa-calendar-alt'></i>",
        });
    }
}


$("#input-todo-button").click(function(){
    let row = $("#todolist > li").length;
    $('#todolist').append(TodoList.getTodoVal(row));
    TodoList.addDatePicker(row);
    $("#input-todo").val("");
});

$("body").on('click', '#del-todo', function(){
   $(this).parent().remove(); 
});

$('body').on('change', '#edit_image', function (e) {
    var reader = new FileReader();
    reader.onload = function (e) {
        $("#tl_img").attr('src', e.target.result);
    }
    reader.readAsDataURL(e.target.files[0]);
    $("#edit_image").remove();
});
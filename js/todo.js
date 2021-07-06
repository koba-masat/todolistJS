let $ = window.jQuery;

const getDateTime = () =>{
    let now = new Date();
    return now.getFullYear() + "年" 
        + (now.getMonth() +1) + "月"
        + now.getDate() + "日"
        + now.getHours() + "時"
        + now.getMinutes() + "分"
        + now.getSeconds() + "秒";
};
const getTodoVal = $rowNum => {
    return  '<li data-row="'+ $rowNum + '">'+
                '<span class="todo">' + $("#input-todo").val() + '</span>' +
                '<span class="date-time">' + getDateTime() + '</span>' +
                '<input type="text" class="datepicker" id="datepicker" placeholder="終了日">' +
                '<button id="del-todo">削除</button>'+
            '</li>';
};

$("#input-todo-button").click(function(){
    let row = $("#todolist > li").length;
    $('#todolist').append(getTodoVal(row));

    // カレンダーフォームにidを設定
    $("#todolist li:last-of-type input.datepicker").attr("id", "todo"+row);
    // カレンダーイベントの再設定
    $("#todo"+row).removeClass("hasDatepicker").off("focusin").on("focusin", function(e) {
        $(this).datepicker();
    });
    $(".datepicker").datepicker({
        showOn: 'both',
        buttonText: "<i class='fas fa-calendar-alt'></i>",
    });

    $("#input-todo").val("");
});

$("body").on('click', '#del-todo', function(){
   $(this).parent().remove(); 
});
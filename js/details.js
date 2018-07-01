$(document).ready(function () {
    $(".comment-item").mouseover(function () {
        $(this).children(".div-reply-icon").children(".reply-icon").children().show();
    });
    $(".comment-item").mouseout(function () {
        $(this).children(".div-reply-icon").children(".reply-icon").children().hide();
    })
});
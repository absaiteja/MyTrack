






function SuccessCall(data) {
    if (data.d == null) {
        alert(data[0]);
    }
    else {
        alert(data.d);
    }
}

function FailureCall(xhr, msg, exception) {
    alert(msg);
}
function ajaxCaller(url, dataToSend, SuccessCallBack, FailureCallBack) {
    $.ajax({
        url: url,
        async: true,
        type: 'POST',
        data: dataToSend,
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: SuccessCallBack,
        error: FailureCallBack
    });
}
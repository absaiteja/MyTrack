$(document).ready(PageLoad);
function PageLoad() {
    $(function () {
        $("#Usertabs").tabs();
    });
    $(".chosen").data("placeholder", "Select Source Station...").chosen();
    $(function () {
        $("#datepicker").datepicker();
    });
    GetAllTrains();
    CreateTrain();
}



 function GetAllTrains() {
     ajaxCaller("TrainDetailsService.asmx/GetAllTrainsService","{}",SuccessCall, FailureCall);
       }

 function CreateTrain() {
    ajaxCaller("TrainDetailsService.asmx/CreateTrainService", "{}", SuccessCall, FailureCall);
}

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





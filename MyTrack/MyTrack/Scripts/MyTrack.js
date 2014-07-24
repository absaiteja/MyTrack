$(document).ready(PageLoad);
function PageLoad() {
    $(function () {
        $("#Usertabs").tabs();
    });
    $(".chosen").data("placeholder", "Select Station...").chosen();
    $(function () {
        $("#datepicker").datepicker();
    });
    GetAllTrains();
    CreateTrain();
    $('#citiesGrid').jqxGrid({
        width: '60%',
        height: '40%',
        columns: [
        { text: 'Train Number', datafield: 'TrainNumber', hidden: true },
        { text: 'Train', datafield: 'TrainName' },
        { text: 'From', datafield: 'Source' },
        { text: 'To', datafield: 'Destination' },
        { text: 'Distance', datafield: 'Distance' },
        { text: 'Arrival Time', datafield: 'ArrivalTime' },
        { text: 'Departure Time', datafield: 'DepartureTime' },
        {
            text: 'Select Train', datafield: 'Edit', columntype: 'button', width: 50, cellsrenderer: function () {
                return "Edit";
            }, buttonclick: function (row) {
                editrowindex = row;
                var varTrainName = $("#citiesGrid").jqxGrid('getcellvalue', row, "TrainName");
                var varSource = $("#citiesGrid").jqxGrid('getcellvalue', row, "Source");
                var varDestination = $("#citiesGrid").jqxGrid('getcellvalue', row, "Destination");
                var varDistance = $("#citiesGrid").jqxGrid('getcellvalue', row, "Distance");
                alert(id);
                //window.location = '/Customers/Edit/?id=' + id;
            }
        }
        ],
        theme: 'metro',
        sortable: true,
        pageable: true,
        source: null
    });
    BindCities();
}



 function GetAllTrains() {
     ajaxCaller("TrainDetailsService.asmx/GetAllTrainsService","{}",SuccessCall, FailureCall);
       }

 function CreateTrain() {
    ajaxCaller("TrainDetailsService.asmx/CreateTrainService", "{}", SuccessCall, FailureCall);
 }

 function BindCities() {
     ajaxCaller("TrainDetailsService.asmx/GetAllTrainsService", "{}", SuccessCall, FailureCall);
 }

function SuccessCall(data) {
    var cities = data.d;
    var source = {
        datatype: 'json',
        datafields: [
            { name: 'TrainNumber', type: 'int' },
            { name: 'TrainName', type: 'string' },
            { name: 'Source', type: 'string' },
            { name: 'Destination', type: 'string' },
            { name: 'Distance', type: 'int' },
             { name: 'ArrivalTime', type: 'string' },
            { name: 'DepartureTime', type: 'string' }
        ],
        id: 'TrainNumber',
        localData: cities
    };
    var dataAdapter = new $.jqx.dataAdapter(source);
    $('#citiesGrid').jqxGrid('source', dataAdapter);
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





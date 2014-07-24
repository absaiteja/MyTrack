$(document).ready(PageLoad);
function PageLoad() {
    $('#fdsShowTrains').hide();
    $('#fdsAddPassengers').hide();
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
        height: '300px',
        columns: [
        { text: 'Train Number', datafield: 'TrainNumber', hidden: true,width:50 },
        { text: 'Train', datafield: 'TrainName',width:40 },
        { text: 'From', datafield: 'Source',width:40 },
        { text: 'To', datafield: 'Destination',width:40 },
        { text: 'Distance', datafield: 'Distance',width:40 },
        { text: 'Arrival Time', datafield: 'ArrivalTime',width:40 },
        { text: 'Departure Time', datafield: 'DepartureTime',width:40 },
        {
            text: 'Select Train', datafield: 'Edit', columntype: 'button', width: 50, cellsrenderer: function () {
                return "Edit";
            }, buttonclick: function (row) {
                editrowindex = row;
                var varTrainName = $("#citiesGrid").jqxGrid('getcellvalue', row, "TrainName");
                var varSource = $("#citiesGrid").jqxGrid('getcellvalue', row, "Source");
                var varDestination = $("#citiesGrid").jqxGrid('getcellvalue', row, "Destination");
                var varDistance = $("#citiesGrid").jqxGrid('getcellvalue', row, "Distance");
                $('#txtAvailableTrain').val(varTrainName);
                $('#txtDistance').val(varDistance);
                $('#txtTicketFrom').val(varSource);
                $('#txtTicketTo').val(varDestination);
                $('#fdsAddPassengers').show();
                $('#fdsAddPassengers').focus();
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
    $("#btnSearchTrains").click(function () {
        $('#fdsShowTrains').show();
        $('#fdsShowTrains').focus();
    });
    $("#btnAddPassenger").click(function () {
        CreateTicket();
    });
}




 function GetAllTrains() {
     ajaxCaller("TrainDetailsService.asmx/GetSpecificTrainsbyFromToService", "{}", SuccessCall, FailureCall);
       }

 function CreateTrain() {
    ajaxCaller("TrainDetailsService.asmx/CreateTrainService", "{}", SuccessCall, FailureCall);
 }

 function CreateTicket() {
     var objTicket= {$('#').val(),$('#').val(),$('#').val(),$('#').val(),$('#').val()};
     ajaxCaller("TrainDetailsService.asmx/CreateTrainService", "{}", SuccessCall, FailureCall);
 }


 function BindCities() {
     var objData = JSON.stringify({});
     ajaxCaller("TrainDetailsService.asmx/GetAllTrainsService", objData , SuccessCall, FailureCall);
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





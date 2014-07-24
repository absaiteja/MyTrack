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
        { text: 'Train Number', datafield: 'TrainNumber',width:40, hidden: true},
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
     ajaxCaller("TrainDetailsService.asmx/CreateTrainService", "{}", SuccessCallOnCreateTrain, FailureCallOnCreateTrain);
 }

 function CreateTicket() {
    
     var varPnr="99999";
     var ddlFromVal = $('#ddlFrom').find('option:selected');
     var ddlFromText = ddlFromVal.text();
     var ddlToVal = $('ddlTo').find('option:selected');
     var ddlToText = ddlToVal.text();
     var dateJourneyDate =$('#datepicker').val();
     var date = new Date(dateJourneyDate);
     var dateFormattedDate = date.toString('yyyy-MM-dd');
     var currDate = new Date();
     var formattedDate = currDate.getFullYear() + "-" + currDate.getMonth() + "-" + currDate.getDate();
     var ddllNoOfPassengersVal = $('ddllNoOfPassengers').find('option:selected');
     var ddllNoOfPassengersText = ddllNoOfPassengersVal.text();
     var varArrivalTime= "12:00";
     var varDepartureTime= "12:00";
     var varFare="1000";
     var varName =$('#datepicker').val();
     var varAge =$('#datepicker').val();
     $("input:radio[name=gender]").click(function() {
         var varGender = $(this).val();
     });
     var ddlBerthVal = ddlBerth.find('option:selected');
     var ddlBerthText = ddlBerthVal.text();
     var objTicket= {varPnr,$('#').val(),$('#').val(),$('#').val(),$('#').val(),$('#').val()};
     ajaxCaller("TrainDetailsService.asmx/CreateTrainService", "{}", SuccessCallOnCreateTicket, FailureCallOnCreateTicket);
 }


 function BindCities() {
     var objData = JSON.stringify({});
     ajaxCaller("TrainDetailsService.asmx/GetAllTrainsService", objData , SuccessCallOnBindCities, FailureCallOnBindCities);
 }

function SuccessCallOnBindCities(data) {
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

function FailureCallOnBindCities(xhr, msg, exception) {
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





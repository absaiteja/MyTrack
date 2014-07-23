$(document).ready(function () {
    $("#admin").dialog({
        autoOpen: false,
        draggable: false,
        resizable: false,
        modal: true,
        my: "center",
        at: "center",
        of: window,
        width: 400,
        dialogClass: 'no-close',
        buttons: {
            "Close": CloseDialog,
            "Clear": ClearAll
        }
    })
    $('#admin').dialog("option", "title", "Admin Login");

    function CloseDialog() {
        $("#admin").dialog("close");
    }

    function ClearAll() {
        $('#txtEmail').val("");
        $('#txtPassword').val("");
    }
    $("#btnadmin").click(function () {
        $("#admin").dialog("open");
        return false;
    })

    $("#Passenger").dialog({
        autoOpen: false,
        draggable: false,
        resizable: false,
        modal: true,
        my: "center",
        at: "center",
        of: window,
        width: 400,
        dialogClass: 'no-close',
        buttons: {
            "Close": ClosePassenger,
            "Clear": ClearPassenger
        }
    })
    $('#Passenger').dialog("option", "title", "User Login");
    function ClosePassenger() {
        $("#Passenger").dialog("close");
    }

    function ClearPassenger() {
        $('#txtUEmail').val("");
        $('#txtUPassword').val("");
    }
    $("#btnPassenger").click(function () {
        $("#Passenger").dialog("open");
        return false;
    })

    //$("#Registration").dialog({
    //    autoOpen: false,
    //    draggable: false,
    //    resizable: false,
    //    modal: true,
    //    my: "center",
    //    at: "center",
    //    of: window,
    //    width: 400,
    //    dialogClass: 'no-close',
    //    buttons: {
    //        "Close": CloseDialog,
    //        "Clear": ClearAll
    //    }
    //})
    //function CloseDialog() {
    //    $("#Registration").dialog("close");
    //}
    //function ClearAll() {
    //    $('#txtEmail').val("");
    //    $('#txtPassword').val("");
    //}
    //$("#btnPassenger").click(function () {
    //    $("#Passenger").dialog("open");
    //    return false;
    //})
    $("#Contact").dialog({
        autoOpen: false,
        draggable: false,
        resizable: false,
        modal: true,
        my: "center",
        at: "center",
        of: window,
        width: 500,
        height:400,
        dialogClass: 'no-close',
        buttons: {
            "Close": CloseContact
        }
    })
    $('#Contact').dialog("option", "title", "Contact Us");
    function CloseContact() {
        $("#Contact").dialog("close");
    }
    $("#btnContact").click(function () {
        $("#Contact").dialog("open");
        return false;
    })
    $('#btnSubmit').click(function () {
        var Email = $('#txtEmail').val();
        var Password = $('#txtPassword').val();
        AjaxAdminLogin(Email,Password, SuccessCall, FailureCallBack);
    })
    function SuccessCall(data) {
        alert(data.d);
    }
    function FailureCallBack(XHR, msg, exception) {
        debugger;
        alert(msg);
    }
    function AjaxAdminLogin(Email, Password, SuccessCall, FailureCallBack) {
        debugger;
        $.ajax({
            url: "HomePage.aspx?Email=" + Email + "&Password=" + Password,
            async: true,
            success: SuccessCall,
            error: FailureCallBack
        })
    }


    });
    

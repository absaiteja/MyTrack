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
            "Close": CloseDialog,
            "Clear": ClearAll
        }
    })
    function CloseDialog() {
        $("#Passenger").dialog("close");
    }

    function ClearAll() {
        $('#txtEmail').val("");
        $('#txtPassword').val("");
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
        width: 400,
        dialogClass: 'no-close',
        buttons: {
            "Close": CloseDialog
        }
    })
    function CloseDialog() {
        $("#Contact").dialog("close");
    }
    $("#btnContact").click(function () {
        $("#Contact").dialog("open");
        return false;
    })
    });
    

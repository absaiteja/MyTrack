<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="AdminHome.aspx.cs" Inherits="MyTrack.Login" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title></title>
    <script src="Scripts/jquery-1.11.1.js"></script>
    <script src="Scripts/jquery-ui.min.js"></script>
    <script src="Scripts/Admin.js"></script>
    <script src="Chosen/choosen/chosen.jquery.min.js"></script>
    <link href="Chosen/choosen/chosen.min.css" rel="stylesheet" />
    <link href="Scripts/jquery-ui.min.css" rel="stylesheet" />
    <link href="CSS/Styles.css" rel="stylesheet" />


</head>
<body>
    <form id="form1" runat="server">
        <div>
            <div id="tabs">
                <ul>
                    <li><a href="#TrainDetails">Trains</a></li>
                    <li><a href="#PaymentDetails">Payments</a></li>
                    <li><a href="#FareDetails">Fares</a></li>
                    <li><a href="#TrainSchedule">Schedule</a></li>
                    <li><a href="#Logout">Logout</a></li>

                </ul>
                <div id="TrainDetails">
                    <div id="MiddleDiv">
                        <div class="ControlDiv">
                            <span class="LeftSpan">
                                <label for="txtTrainNumber">
                                    Train Number :<span class="Mandatory">*</span>
                                </label>
                            </span>
                            <span class="RightSpan">
                                <input id="txtTrainNumber" type="text" maxlength="5" placeholder="Train Number" />
                            </span>
                        </div>
                        <div class="ControlDiv">
                            <span class="LeftSpan">
                                <label for="txtTrainName">
                                    Train Name :<span class="Mandatory">*</span>
                                </label>
                            </span>
                            <span class="RightSpan">
                                <input id="txtTrainName" type="text" maxlength="30" placeholder="Train Name" />
                            </span>
                        </div>
                        <div class="ControlDiv">
                            <span class="LeftSpan">
                                <label for="txtSource">
                                    Source :<span class="Mandatory">*</span>
                                </label>
                            </span>
                            <span class="RightSpan">
                                <input id="txtSource" type="text" maxlength="30" placeholder="Source" />
                            </span>
                        </div>
                        <div class="ControlDiv">
                            <span class="LeftSpan">
                                <label for="txtDestiantion">
                                    Destination :<span class="Mandatory">*</span>
                                </label>
                            </span>
                            <span class="RightSpan">
                                <input id="txtDestiantion" type="text" maxlength="30" placeholder="Destination" />
                            </span>
                        </div>
                        <div class="ControlDiv">
                            <span class="LeftSpan">
                                <label for="txtDistance">
                                    Distance :<span class="Mandatory">*</span>
                                </label>
                            </span>
                            <span class="RightSpan">
                                <input id="txtDistance" type="text" maxlength="30" placeholder="Distance" />
                            </span>
                        </div>
                        <div class="ControlDiv">
                            <span class="LeftSpan">
                                <label for="txtArrivalTime">
                                    Arrival Time :<span class="Mandatory">*</span>
                                </label>
                            </span>
                            <span class="RightSpan">
                                <input id="txtArrivalTime" type="text" maxlength="30" placeholder="ArrivalTime" />
                            </span>
                        </div>
                        <div class="ControlDiv">
                            <span class="LeftSpan">
                                <label for="txtDepartureTime">
                                    Departure Time :<span class="Mandatory">*</span>
                                </label>
                            </span>
                            <span class="RightSpan">
                                <input id="txtDepartureTime" type="text" maxlength="30" placeholder="ArrivalTime" />
                            </span>
                        </div>
                        <div class="ControlDiv">
                            <span>
                                <input id="btnSubmit" type="submit" value="submit" />
                            </span>
                            <span>
                                <input id="btnViewDetails" type="button" value="ViewDetails" />
                            </span>
                        </div>
                    </div>
                </div>
                <div id="PaymentDetails">
                    <div class="ControlDiv">
                        <span>
                            <label for="txtDepartureTime">
                                Train Name :<span class="Mandatory">*</span>
                            </label>
                        </span>
                        <span></span>
                    </div>
                </div>
                <div id="FareDetails">
                    <select class="chosen" style="width: 200px">
                        <option>JanmabhumiExpress</option>
                        <option>RathnachalExpress</option>
                        <option>GouthmoExpress</option>
                        <option>GodavariExpress</option>
                        <option>PrasanthiExpress</option>
                    </select>
                </div>
                <div id="TrainSchedule">
                    <p>Mauris eleifend est et turpis. Duis id erat. Suspendisse potenti. Aliquam vulputate, pede vel vehicula accumsan, mi neque rutrum erat, eu congue orci lorem eget lorem. Vestibulum non ante. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Fusce sodales. Quisque eu urna vel enim commodo pellentesque. Praesent eu risus hendrerit ligula tempus pretium. Curabitur lorem enim, pretium nec, feugiat nec, luctus a, lacus.</p>
                </div>

            </div>

        </div>

    </form>
</body>
</html>

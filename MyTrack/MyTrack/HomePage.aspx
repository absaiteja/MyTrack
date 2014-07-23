<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="HomePage.aspx.cs" Inherits="MyTrack.HomePage" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head id="Head1" runat="server">
    <title>MyTracks</title>
    <link href="Scripts/Styles.css" rel="stylesheet" />
    <script src="Scripts/jquery-1.11.1.js"></script>
    <script src="Scripts/jquery-ui.min.js"></script>
    <link href="Scripts/jquery-ui.min.css" rel="stylesheet" />
    <script src="Scripts/MyScript.js"></script>
</head>
<body>
    <div>
        <form id="form1" runat="server">
            <div class="header">
                <h1><span class="left">
                    <img src="Scripts/images/logo.jpg" height="80" width="200" /></span>
                    <span class="right">Online RailWay Reservation </span></h1>
            </div>
            <div class="center">
                <div class="center-left">
                    <span class="img">
                        <img src="Scripts/images/conference-call-128.ico" />
                    </span>
                    <div class="left-welcome">
                        Welcome
                    </div>
                    <div>
                        <ul>
                            <li><asp:LinkButton ID="btnadmin" runat="server" href="#admin">Admin Login</asp:LinkButton></li>
                            <li><asp:LinkButton ID="btnregistration" runat="server" href="#Registration"> Registration </asp:LinkButton></li>
                            <li><asp:LinkButton ID="btnPassenger" runat="server" href="#Passenger">User Login </asp:LinkButton></li>
                            <li><asp:LinkButton ID="btnContact" runat="server" href="#Contact">Contact Us </asp:LinkButton></li>
                        </ul>
                    </div>
                </div>
                <div class="center-middle">
                    <img src="Scripts/images/gugi.jpg" height="400" width="680" />
                </div>
                <div class="center-right">
                    <marquee behavior="scroll" direction="right"><img src="Scripts/images/download.jpg" height="200" width="300" /></marquee>
                    <marquee behavior="scroll" direction="left"><img src="Scripts/images/kbjj.JPG" height="180" width="300" /></marquee>
                </div>
                <div class="center-footer">
                    <marquee behavior="scroll" direction="left"> TICKET IS VALID ONLY WITH ORIGINAL ID OF THE PASSENGER </marquee>
                </div>
            </div>
            <div id="admin">
                <div>
                    <asp:Label ID="lblName" runat="server" Text="Email ID :"></asp:Label>
                    <asp:TextBox ID="txtEmail" runat="server" placeholder="Enter your Email Id"></asp:TextBox>
                </div>
                <div>
                    <asp:Label ID="lblPassword" runat="server" Text="Password :"></asp:Label>
                    <asp:TextBox ID="txtPassword" runat="server" TextMode="Password" placeholder="Enter Your Password"></asp:TextBox>
                </div>
                <div>
                    <span>
                        <asp:Button ID="btnSubmit" runat="server" Text="Login" />
                    </span>
                </div>
                <div>
                    <asp:Label ID="LblError" runat="server" Text=""></asp:Label>
                </div>
            </div>
            <div id="Passenger">
                <div>
                    <asp:Label ID="lblUName" runat="server" Text="Email ID :"></asp:Label>
                    <asp:TextBox ID="txtUEmail" runat="server" placeholder="Enter your Email Id"></asp:TextBox>
                </div>
                <div>
                    <asp:Label ID="lblUPassword" runat="server" Text="Password :"></asp:Label>
                    <asp:TextBox ID="txtUPassword" runat="server" TextMode="Password" placeholder="Enter Your Password"></asp:TextBox>
                </div>
                <div>
                    <span>
                        <asp:Button ID="btnUSubmit" runat="server" Text="Login" />
                    </span>
                </div>
                <div>
                    <asp:Label ID="LblUError" runat="server" Text=""></asp:Label>
                </div>
            </div>
            <div id ="Contact">
                <p>
                    Customer Care No. 040-23340000
                        Fax no.040-23345400
                        Chennai Customer Care No. 040-25300000
 
                        For Railway tickets booked through My Track
                        General Information
                        I-tickets/e-tickets: care@mytrack.co.in
                </p>
                <p>
                        Registered Office / Corporate Office :
                        My Track Corporation Ltd.,
                        5th Floor, White House Building,
                        Begumpet,Hyderabad 500072.
                        Tel: 040-23311263/23311264
                        Fax: 040-23311259
                </p>
            </div>
        </form>
    </div>
</body>
</html>


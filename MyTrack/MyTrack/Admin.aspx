<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="Admin.aspx.cs" Inherits="MyTrack.Admin" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title></title>
</head>
<body>
    <form id="form1" runat="server">
        <div class="dialog">
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
    </form>
</body>
</html>

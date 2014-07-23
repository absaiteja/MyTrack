using DBOperationsDll;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
namespace MyTrack
{
    public partial class HomePage : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            if (Request.QueryString["Email"] != null && Request.QueryString["Password"] != null)
            {
                Response.Write(Login());
                Response.End();
            }
        }
        private bool Login()
        {
            bool blnResult = false;
            Entities.Users objUsers = new Entities.Users();
            objUsers = Entities.Users.Get(Request.QueryString["Email"]);
            if (objUsers.Password == Request.QueryString["Password"])
            {
                Response.Redirect("AdminHome.aspx");
                blnResult = true;
            }
            return blnResult;
        }
    }
}
using MyTrack.Entities;
using MyTrack.Utilities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Services;

namespace MyTrack
{
    /// <summary>
    /// Summary description for DBOperations
    /// </summary>
    [WebService(Namespace = "http://tempuri.org/")]
    [WebServiceBinding(ConformsTo = WsiProfiles.BasicProfile1_1)]
    [System.ComponentModel.ToolboxItem(false)]
    // To allow this Web Service to be called from script, using ASP.NET AJAX, uncomment the following line. 
    [System.Web.Script.Services.ScriptService]
    public class DBOperations : System.Web.Services.WebService
    {

        [WebMethod]
        public string HelloWorld()
        {
            return "Hello World";
        }
        [WebMethod]
        public bool InsertUsers()
        {

            return false;
        }
        [WebMethod]
        public List<Entities.Route> GetAllRoutes()
        {
            List<Entities.Route> lstRoutes = new List<Entities.Route>();
            Route objRoute = new Route();
            lstRoutes = Entities.Route.GetAllDetails();
            return lstRoutes;
        }
        [WebMethod]
        public Response InsertRoute()
        {
            Route objRoute = new Route();
            bool blnResult=objRoute.Create();
            if (!blnResult)
            {
                objDBOperations.CloseConnection();
                return new Response(9999, string.Format(Failure_MSG, "update"));
            }
            objDBOperations.CloseConnection();
            return new Response(5555, string.Format(Success_MSG, "updated"));
        }

    }
}

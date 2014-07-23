using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace MyTrack.Utilities
{
    public class Response
    {
        public int id { get; set; }
        public string Message { get; set; }
        public string ExtendedMessage { get; set; }

        public Response(int intId, string strMessage)
        {
            this.id = intId;
            this.Message = strMessage;
        }
        public Response(int intId, string strMessage, string strExtendedMessage)
        {
            this.id = intId;
            this.Message = strMessage;
            this.ExtendedMessage = strExtendedMessage;
        }
    }
}
   
using DBOperationsDll;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Data;
using System.Linq;
using System.Web;

namespace MyTrack.Entities
{
    public class Fares
    {

        [Display(Name = "FareID", Description = "PrimaryKey")]
        public int FareID { get; set; }

        [Display(Name = "Station_From")]
        public string Station_From { get; set; }

        [Display(Name = "Station_To")]
        public string Station_To { get; set; }

        [Display(Name = "Fare")]
        public float Fare { get; set; }


        public bool Create()
        {
            bool blnResult = true;
            string strQuery = @"INSERT INTO [Fares]
                                   ([Station_From],[Station_To] ,[Fare])
                             VALUES(@Station_From,@Station_To,@Fare ";
            string[] strParameters = { "Station_From", "Station_To", "Fare" };
            object[] strParametersValues = { };
            DBOperations objparameteres = new DBOperations(Properties.Settings.Default.Connection);
            blnResult = objparameteres.ExecuteQuery(strQuery, strParameters, strParametersValues);
            return blnResult;
        }
        public bool Update()
        {
            string strQuery = @" UPDATE [Fares]
                                   SET [Station_From] = @Station_From,
                                       [Station_To] = @Station_To,
                                       [Fare] = @Fare
                                   WHERE FareID = @FareID";
            string[] strParameters = { "Station_From", "Station_To", "Fare" };
            object[] strParametersValues = { };
            DBOperations objparameteres = new DBOperations(Properties.Settings.Default.Connection);
            objparameteres.ExecuteQuery(strQuery, strParameters, strParametersValues);
            return true;
        }
        public static Fares Get()
        {
            Fares objFares = new Fares();
            string strQuery = @"SELECT [FareID]
                                      ,[Station_From]
                                      ,[Station_To]
                                      ,[Fare]
                                  FROM [Fares] 
                                  WHERE FareID = @FareID ";
            string strConnection = Properties.Settings.Default.Connection;
            DataTable dtRetval = new DataTable();
            int intTemp = 0;
            float fltTemp = 0;
            string[] strArrParameters = { "FareID" };
            object[] strArrParameterValues = { };
            dtRetval = DBOperations.ExecuteQueryForAll(strConnection, strQuery, strArrParameters, strArrParameterValues);
            if (dtRetval.Rows.Count > 0)
            {
                objFares = new Fares();
                int.TryParse(dtRetval.Rows[0]["FareID"].ToString(), out intTemp);
                objFares.FareID = intTemp;
                objFares.Station_From = dtRetval.Rows[0]["Station_From"] != null ? dtRetval.Rows[0]["Station_From"].ToString() : string.Empty;
                objFares.Station_To = dtRetval.Rows[0]["Station_To"] != null ? dtRetval.Rows[0]["Station_To"].ToString() : string.Empty;
                float.TryParse(dtRetval.Rows[0]["Fare"].ToString(), out fltTemp);
                objFares.Fare = fltTemp;
            }
            return objFares;
        }
        public static List<Fares> GetAll()
        {
            List<Fares> lstFares = new List<Fares>();
            Fares objFares = new Fares();
            string strQuery = @"SELECT [FareID]
                                      ,[Station_From]
                                      ,[Station_To]
                                      ,[Fare]
                                  FROM [Fares]";
            string strConnection = Properties.Settings.Default.Connection;
            DataTable dtRetval = new DataTable();
            int intTemp = 0;
            float fltTemp = 0;
            dtRetval = DBOperations.ExecuteQueryForAll(strConnection, strQuery, new string[] { }, new object[] { });
            if (dtRetval.Rows.Count > 0)
            {
                for (int i = 0; i < dtRetval.Rows.Count; i++)
                {
                    objFares = new Fares();
                    int.TryParse(dtRetval.Rows[i]["FareID"].ToString(), out intTemp);
                    objFares.FareID = intTemp;
                    objFares.Station_From = dtRetval.Rows[i]["Station_From"] != null ? dtRetval.Rows[i]["Station_From"].ToString() : string.Empty;
                    objFares.Station_To = dtRetval.Rows[i]["Station_To"] != null ? dtRetval.Rows[i]["Station_To"].ToString() : string.Empty;
                    float.TryParse(dtRetval.Rows[i]["Fare"].ToString(), out fltTemp);
                    objFares.Fare = fltTemp;
                    lstFares.Add(objFares);
                }
            }
            return lstFares;
        }
    }
}
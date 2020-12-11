using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using Dapper;
using EvryIDS.Domain.Models;
using static EvryIDS.Persistence.Utility.SqlUtility;

namespace EvryIDS.Persistence.DBContext
{
    public class UserDBContext
    {
    IDbConnection sqlCon;
        public User GetUser()
        {
           using (sqlCon = GetConnection())
            {
                var com = new DynamicParameters();
                User result=new User();
                com.Add("@UserName", "fsdf");
                try
                {
                    result = sqlCon.Query<User>("usp_userGet", com, commandType: CommandType.StoredProcedure).FirstOrDefault();
                 
                }
                catch (Exception ex )
                {
                    throw ex;
                }
                   return result;
            }
        }
    }
}
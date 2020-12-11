using System;
using System.Data.SqlClient;
using Microsoft.Extensions.Configuration;
using System.IO;
using EvryIDS.Persistence.AppConfig;


namespace EvryIDS.Persistence.Utility
{
    public static class SqlUtility
    {
        public static SqlConnection GetConnection()=>new SqlConnection(new AppConfiguration().ConnectionString);
    }
}
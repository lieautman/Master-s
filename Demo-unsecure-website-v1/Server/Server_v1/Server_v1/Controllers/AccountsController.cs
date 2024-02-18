using Microsoft.AspNetCore.Mvc;
using Server_v1.ReadObjects;
using Microsoft.Data.Sqlite;

namespace Server_v1.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class AccountsController : ControllerBase
    {
        const string DatabaseConnString = "Data Source=../../../Database/db_v1.db";

        [HttpGet(Name = "GetAccounts")]
        public IEnumerable<Account> Get()
        {
            using (var connection = new SqliteConnection(DatabaseConnString))
            {
                connection.Open();

                var command = connection.CreateCommand();
                command.CommandText = "SELECT * FROM Accounts";

                List<Account> list = new List<Account>();

                using (var reader = command.ExecuteReader())
                {
                    while (reader.Read())
                    {
                        var id = Int32.Parse(reader.GetString(0));
                        var username = reader.GetString(1);
                        var password = reader.GetString(2);

                        Account a = new Account(id, username, password);
                        list.Add(a);
                    }
                }
                return list;
            }
        }
    }
}
